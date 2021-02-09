import { Character, validateCharacter } from "./exercicio1";

export const performAttack = (
    attacker: Character,
    defender: Character
) => {
    if (!validateCharacter(attacker) || !validateCharacter(defender)) {
        throw new Error("Invalid charcters")
    }

    if (attacker.strength > defender.defense) {
        defender.health = defender.health - (attacker.strength - defender.defense)
    }
}

export const performAttackDI = (
    attacker: Character,
    defender: Character,
    validator: (input: Character) => boolean
) => {
    if (!validator(attacker) || !validator(defender)) {
        throw new Error("Invalid charcters")
    }

    if (attacker.strength > defender.defense) {
        defender.health = defender.health - (attacker.strength - defender.defense)
    }
}