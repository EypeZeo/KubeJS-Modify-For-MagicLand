ServerEvents.recipes(event => {
    event.recipes.create.mixing('minecraft:iron_block', ['32x minecraft:iron_ingot',Fluid.lava(100)]).heated()
    event.recipes.create.mixing('minecraft:redstone_block', ['32x minecraft:redstone',Fluid.lava(100)]).heated()
    event.recipes.create.mixing('minecraft:copper_block', ['32x minecraft:copper_ingot',Fluid.lava(100)]).heated()
    event.recipes.create.mixing('minecraft:diamond_block', ['32x minecraft:diamond',Fluid.lava(100)]).superheated()
    event.recipes.create.mixing('minecraft:coal_block', ['32x minecraft:coal',Fluid.lava(100)]).heated()
    event.recipes.create.mixing('minecraft:gold_block', ['32x minecraft:gold_ingot',Fluid.lava(100)]).heated()
    event.recipes.create.mixing('minecraft:lapis_block', ['32x minecraft:lapis_lazuli',Fluid.lava(100)]).heated()
    event.recipes.create.mixing('minecraft:emerald_block', ['32x minecraft:emerald',Fluid.lava(100)]).superheated()
    event.recipes.create.compacting('create:blaze_cake', ['2x create:cinder_flour','2x minecraft:sugar',Fluid.lava(100)])

    event.recipes.create.mixing(Fluid.of("pneumaticcraft:oil", 100), [Fluid.of("gtceu:oil_medium", 100),'#minecraft:planks']) //GTM原油转气动工艺原油
    event.recipes.create.mixing(Fluid.of("ad_astra:oil", 100), [Fluid.of("pneumaticcraft:oil", 100),'#minecraft:planks']) //气动工艺原油转星系石油
    event.recipes.create.mixing(Fluid.of("thermal:crude_oil", 100), [Fluid.of("ad_astra:oil", 100),'#minecraft:planks']) //星系石油转热力石油
    event.recipes.create.mixing(Fluid.of("gtceu:oil", 100), [Fluid.of("thermal:crude_oil", 100),'#minecraft:planks']) //热力石油转格雷石油
    event.recipes.create.mixing(Fluid.of("gtceu:oil_medium", 100), [Fluid.of("gtceu:oil", 100),'#minecraft:planks']) //格雷石油转格雷原油

    event.recipes.gtceu.assembler('deepdrilling:crimsite_node') //绯红岩矿脉   
        .itemInputs(
            '4x minecraft:redstone_block',
            '4x mindx:compressed_iron_block',
            'gtceu:stainless_steel_block'
        )
        .itemOutputs('deepdrilling:crimsite_node')
        .duration(7200)
        .EUt(HV)

    event.recipes.gtceu.assembler('deepdrilling:asurine_node') //浩蓝石矿脉   
        .itemInputs(
            '32x minecraft:gunpowder',
            '4x mindx:compressed_lapis_block',
            'gtceu:stainless_steel_block'
        )
        .itemOutputs('deepdrilling:asurine_node')
        .duration(7200)
        .EUt(HV)

    event.recipes.gtceu.assembler('deepdrilling:ochrum_node') //赭金砂矿脉   
        .itemInputs(
            '4x minecraft:quartz_block',
            '4x mindx:compressed_gold_block',
            'gtceu:stainless_steel_block'
        )
        .itemOutputs('deepdrilling:ochrum_node')
        .duration(7200)
        .EUt(HV)

    event.recipes.gtceu.assembler('deepdrilling:veridium_node') //辉绿岩矿脉   
        .itemInputs(
            '4x minecraft:emerald_block',
            '4x mindx:compressed_copper_block',
            'gtceu:stainless_steel_block'
        )
        .itemOutputs('deepdrilling:veridium_node')
        .duration(7200)
        .EUt(HV)

    event.recipes.create.mechanical_crafting('mindx:magic_star', [
        'CDAZAZADC',
        'DBYBYBYBD',
        'AYJKKLLGA',
        'RBJUVWLGR',
        'QYJPXWMFQ',
        'QBIONNMFQ',
        'ABIIHHHFA',
        'DBESETEED',
        'CDAZAZADC'
      ], {
        A: 'mindx:extreme_compressed_diamond_block',
        B: 'mindx:extreme_compressed_redstone_block',
        C: 'draconicevolution:reactor_core',
        D: 'draconicevolution:energy_core',
        E: 'pneumaticcraft:printed_circuit_board',
        F: 'draconicevolution:wyvern_core',
        G: 'l2complements:eternal_anvil',
        H: 'l2hostility:miracle_block',
        I: 'bigger_ae2:digital_singularity_cell_component',
        J: 'gtceu:energy_cluster',
        K: 'bigger_ae2:1024_core_crafting_accelerator',
        L: 'industrialforegoing:machine_frame_supreme',
        M: 'mekanism_extras:infinite_induction_provider',
        N: 'mekanism_extras:infinite_bin',
        O: 'mindx:extreme_compressed_gold_block',
        P: 'megacells:cell_component_256m',
        Q: 'bigreactors:insanite_block',
        R: 'gtceu:exquisite_sapphire_gem',
        S: 'mekanism:mekasuit_helmet',
        T: 'mekanism:mekasuit_bodyarmor',
        U: 'mekanism:mekasuit_pants',
        V: 'mekanism:mekasuit_boots',
        W: 'expatternprovider:ex_molecular_assembler',
        X: 'mindx:extreme_compressed_netherite_block',
        Y: 'mekanism_extras:infinite_energy_cube',
        Z: 'minecraft:dragon_head'
      })
})