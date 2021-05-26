export default function generateSlug(urlText) {
    const urlSplit = urlText.split(' ');
    return urlText.length > 1
        ? urlSplit.join('-').toLowerCase()
        : urlSplit.join(' ').toLowerCase();
}