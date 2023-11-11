import imageText from './ImageText.ts'

export default({
    modules: {
        imageText,
    },
    strict: debug,
    plugins: debug ? [createLogger()] : []
})