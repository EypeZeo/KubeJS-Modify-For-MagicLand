ServerEvents.recipes(event => {
    event.remove({output: 'sophisticatedstorage:chest'})
    event.remove({output: 'sophisticatedstorage:copper_chest'})
    event.remove({output: 'sophisticatedstorage:iron_chest'})
    event.remove({output: 'sophisticatedstorage:gold_chest'})
    event.remove({output: 'sophisticatedstorage:diamond_chest'})
    event.remove({output: 'sophisticatedstorage:netherite_chest'})
    event.remove({output: 'sophisticatedstorage:basic_tier_upgrade'})
})