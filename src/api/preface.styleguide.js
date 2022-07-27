
export default function MakePreface(subtitle, title) {
    const isSubtitleValid = (subtitle) ? subtitle : "Maker"
    const isStyleguideValid = (title) ? title : "styleguide" 
    return {
        subtitle: isSubtitleValid,
        title: isStyleguideValid
    }
}