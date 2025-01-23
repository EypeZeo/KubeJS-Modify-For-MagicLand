ServerEvents.recipes(event => {
    event.shaped('mindx:processing_catalyst', [
        ' C ',
        'CBC',
        ' C '
    ], {
        C: 'minecraft:coal',
        B: 'minecraft:bone_meal'
    });
    
    // 添加新的熔炉配方
    event.smelting({
        type: 'minecraft:smelting',
        ingredient: {
            item: 'minecraft:iron_ore'
        },
        input: {
            item: 'mindx:processing_catalyst'
        },
        result: {
            item: 'minecraft:iron_ingot'
        },
        experience: 0.7,
        cookingtime: 100
    });

});
