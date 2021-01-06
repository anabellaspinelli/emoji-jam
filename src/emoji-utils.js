export const getRandomEmojiFromGroup = emojiGroup => {
    const randomIndex = Math.floor(Math.random() * emojiGroup.length)

    return emojiGroup[randomIndex]
}
