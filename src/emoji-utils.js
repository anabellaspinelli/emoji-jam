export const getRandomEmojiFromGroup = emojiGroup => {
    const randomIndex = Math.floor(Math.random() * emojiGroup.length)

    return emojiGroup[randomIndex]
}

export const maybeGetEmojiFromGroup = (emojis = []) => {
    const randomIndex = Math.floor(Math.random() * (emojis.length * 1.2))

    const emojiMaybe = emojis[randomIndex]

    return emojiMaybe || ' '
}
