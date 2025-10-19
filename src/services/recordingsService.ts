import { databases } from '../lib/appwrite';
import { DATABASE_ID, RECORDINGS_COLLECTION_ID } from '../lib/appwrite';
import { ID, Query } from 'appwrite';
import type { RecordedNote } from '../utils/recordingEngine';

export interface RecordingDocument {
    $id: string;
    userId: string;
    title: string;
    notes: RecordedNote[];
    duration: number;
    isPublished: boolean;
    $createdAt: string;
    $updatedAt: string;
}

class RecordingsService {
    // Create a new recording
    async createRecording(
        userId: string,
        title: string,
        notes: RecordedNote[],
        duration: number
    ): Promise<RecordingDocument> {
        try {
            const recording = await databases.createDocument(
                DATABASE_ID,
                RECORDINGS_COLLECTION_ID,
                ID.unique(),
                {
                    userId,
                    title,
                    notes: JSON.stringify(notes),
                    duration,
                    isPublished: false,
                }
            );
            return this.parseRecording(recording);
        } catch (error) {
            console.error('Create recording error:', error);
            throw error;
        }
    }

    // Get user's recordings
    async getUserRecordings(userId: string): Promise<RecordingDocument[]> {
        try {
            const response = await databases.listDocuments(
                DATABASE_ID,
                RECORDINGS_COLLECTION_ID,
                [
                    Query.equal('userId', userId),
                    Query.orderDesc('$createdAt'),
                    Query.limit(100)
                ]
            );
            return response.documents.map(doc => this.parseRecording(doc));
        } catch (error) {
            console.error('Get recordings error:', error);
            throw error;
        }
    }

    // Get published songs (from all users)
    async getPublishedSongs(searchQuery?: string): Promise<RecordingDocument[]> {
        try {
            const queries = [
                Query.equal('isPublished', true),
                Query.orderDesc('$createdAt'),
                Query.limit(100)
            ];

            if (searchQuery) {
                queries.push(Query.search('title', searchQuery));
            }

            const response = await databases.listDocuments(
                DATABASE_ID,
                RECORDINGS_COLLECTION_ID,
                queries
            );
            return response.documents.map(doc => this.parseRecording(doc));
        } catch (error) {
            console.error('Get published songs error:', error);
            throw error;
        }
    }

    // Update recording
    async updateRecording(
        recordingId: string,
        data: Partial<{
            title: string;
            notes: RecordedNote[];
            duration: number;
            isPublished: boolean;
        }>
    ): Promise<RecordingDocument> {
        try {
            const updateData: any = { ...data };

            if (data.notes) {
                updateData.notes = JSON.stringify(data.notes);
            }

            const recording = await databases.updateDocument(
                DATABASE_ID,
                RECORDINGS_COLLECTION_ID,
                recordingId,
                updateData
            );
            return this.parseRecording(recording);
        } catch (error) {
            console.error('Update recording error:', error);
            throw error;
        }
    }

    // Publish/unpublish recording
    async togglePublish(recordingId: string, isPublished: boolean): Promise<RecordingDocument> {
        return this.updateRecording(recordingId, { isPublished });
    }

    // Delete recording
    async deleteRecording(recordingId: string): Promise<void> {
        try {
            await databases.deleteDocument(
                DATABASE_ID,
                RECORDINGS_COLLECTION_ID,
                recordingId
            );
        } catch (error) {
            console.error('Delete recording error:', error);
            throw error;
        }
    }

    // Parse recording document
    private parseRecording(doc: any): RecordingDocument {
        return {
            $id: doc.$id,
            userId: doc.userId,
            title: doc.title,
            notes: typeof doc.notes === 'string' ? JSON.parse(doc.notes) : doc.notes,
            duration: doc.duration,
            isPublished: doc.isPublished,
            $createdAt: doc.$createdAt,
            $updatedAt: doc.$updatedAt,
        };
    }
}

export const recordingsService = new RecordingsService();

