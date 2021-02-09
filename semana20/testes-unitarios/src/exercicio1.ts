export interface Character {
    name: string,
    health: number,
    strength: number,
    defense: number
}

export const validateCharacter = (input: Character) => {
    if (!input.name || !input.health || !input.strength || !input.defense) {
        return false
    }
    
    if (input.health <= 0 || input.strength <= 0 || input.defense <= 0) {
        return false
    }

    return true
}