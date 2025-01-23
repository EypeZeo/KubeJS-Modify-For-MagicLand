ServerEvents.recipes(event => {
    event.remove({ id: 'l2complements:enchantments/invincible' }),
    event.remove({ id: 'l2complements:enchantments/magic_reject' }),
    event.remove({ id: 'l2complements:enchantments/explosion_reject' }),
    event.remove({ id: 'l2complements:enchantments/environment_reject' }),
    event.remove({ id: 'l2complements:enchantments/fire_reject' }),
    event.remove({ id: 'l2complements:enchantments/projectile_reject' }),
    event.remove({ id: 'l2complements:enchantments/eternal' }),
    event.replaceInput({id: 'l2hostility:hostility_spawner'}, 'minecraft:netherite_ingot', 'mindx:compressed_netherite_block')
    event.replaceInput({output: 'l2hostility:chaos_ingot'}, 'l2complements:captured_wind', 'l2complements:captured_shulker_bullet')
})