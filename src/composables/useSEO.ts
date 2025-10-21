import { ref, watch } from 'vue'

interface SEOConfig {
    title?: string
    description?: string
    keywords?: string
    image?: string
    url?: string
    type?: string
}

const defaultSEO = {
    title: 'iKeys - Interactive Piano Learning Platform | Learn Piano Online',
    description: 'Master piano playing with iKeys - an interactive piano learning platform featuring falling chord visualization, practice modes, chord dictionary, and recording capabilities. Perfect for beginners and intermediate players.',
    keywords: 'piano learning, interactive piano, piano lessons, chord practice, piano tutorial, music education, piano app, learn piano online, piano chords, music learning',
    image: 'https://ikeys.app/piano.svg',
    url: 'https://ikeys.app/',
    type: 'website'
}

export function useSEO(config: SEOConfig = {}) {
    const seoConfig = ref({ ...defaultSEO, ...config })

    const updateMetaTag = (name: string, content: string, property = false) => {
        const attribute = property ? 'property' : 'name'
        let meta = document.querySelector(`meta[${attribute}="${name}"]`)

        if (meta) {
            meta.setAttribute('content', content)
        } else {
            meta = document.createElement('meta')
            meta.setAttribute(attribute, name)
            meta.setAttribute('content', content)
            document.head.appendChild(meta)
        }
    }

    const updateTitle = (title: string) => {
        document.title = title
        updateMetaTag('title', title)
        updateMetaTag('og:title', title, true)
        updateMetaTag('twitter:title', title, true)
    }

    const updateDescription = (description: string) => {
        updateMetaTag('description', description)
        updateMetaTag('og:description', description, true)
        updateMetaTag('twitter:description', description, true)
    }

    const updateKeywords = (keywords: string) => {
        updateMetaTag('keywords', keywords)
    }

    const updateImage = (image: string) => {
        updateMetaTag('og:image', image, true)
        updateMetaTag('twitter:image', image, true)
    }

    const updateURL = (url: string) => {
        updateMetaTag('og:url', url, true)
        updateMetaTag('twitter:url', url, true)

        // Update canonical URL
        let canonical = document.querySelector('link[rel="canonical"]')
        if (canonical) {
            canonical.setAttribute('href', url)
        } else {
            canonical = document.createElement('link')
            canonical.setAttribute('rel', 'canonical')
            canonical.setAttribute('href', url)
            document.head.appendChild(canonical)
        }
    }

    const updateSEO = (newConfig: SEOConfig) => {
        seoConfig.value = { ...seoConfig.value, ...newConfig }

        if (newConfig.title) updateTitle(newConfig.title)
        if (newConfig.description) updateDescription(newConfig.description)
        if (newConfig.keywords) updateKeywords(newConfig.keywords)
        if (newConfig.image) updateImage(newConfig.image)
        if (newConfig.url) updateURL(newConfig.url)
    }

    // Watch for changes and update meta tags
    watch(seoConfig, (newConfig) => {
        updateSEO(newConfig)
    }, { deep: true })

    return {
        seoConfig,
        updateSEO,
        updateTitle,
        updateDescription,
        updateKeywords,
        updateImage,
        updateURL
    }
}
