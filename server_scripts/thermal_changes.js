ServerEvents.recipes(event => {
    event.remove({ output: 'thermal:rf_coil'})
    event.remove({ output: 'thermal:machine_frame'})
    event.remove({ output: 'thermal:energy_cell_frame'})
    event.remove({ output: 'thermal:fluid_cell_frame'})
    event.remove({ output: 'thermal:upgrade_augment_1'})
    event.remove({ output: 'thermal:upgrade_augment_2'})
    event.remove({ output: 'thermal:upgrade_augment_3'})
    event.remove({ output: 'thermal_extra:upgrade_augment'})
    event.remove({ output: 'thermal_extra:abyssal_upgrade_augment'})
    event.remove({ output: 'thermal:redstone_servo'})
    event.remove({ output: 'thermal_extra:device_lava_gen'})
    event.remove({ output: 'thermal_extra:advanced_refinery'})
    event.remove({ output: 'thermal_extra:nitratic_igniter'})
    event.remove({ output: 'thermal_extra:fluid_mixer'})
    event.remove({ output: 'thermal_extra:component_assembly'})
    event.remove({ output: 'thermal_extra:endothermic_dehydrator'})
    event.remove({ id: 'thermal_extra:machine/component_assembly/redstone_servo'})
    event.remove({ id: 'thermal_extra:machine/component_assembly/redstone_servo1'})

    event.shaped('thermal:redstone_servo', [ //红石伺服器
        ' A ',
        'BCB',
        ' A '
    ], {
        A: 'gtceu:tin_alloy_ingot',
        B: 'minecraft:redstone_block',
        C: 'minecraft:iron_ingot'
    })

    event.shaped('thermal:rf_coil', [ //红石通量线圈
        'A B',
        ' C ',
        'B A'
    ], {
        A: 'gtceu:cupronickel_ingot',
        B: 'minecraft:redstone_block',
        C: 'minecraft:gold_ingot'
    })

    //------------------------------------------------------------------------------框架
    event.recipes.gtceu.assembler('thermal:machine_frame') //机器框架  
        .itemInputs(
            '4x minecraft:iron_ingot',
            '4x #c:glass_blocks',
            '2x thermal:tin_gear'
        )
        .itemOutputs('thermal:machine_frame')
        .duration(100)
        .EUt(GTValues.V[GTValues.LV])
    
    event.recipes.gtceu.assembler('thermal:energy_cell_frame') //红石通量单元框架
        .itemInputs(
            '4x #forge:ingots/lead',
            '4x #c:glass_blocks',
            '2x thermal:electrum_gear'
        )
        .itemOutputs('thermal:energy_cell_frame')
        .duration(100)
        .EUt(GTValues.V[GTValues.LV])

    event.recipes.gtceu.assembler('thermal:fluid_cell_frame') //流体单元框架
        .itemInputs(
            '4x minecraft:copper_ingot',
            '4x #c:glass_blocks',
            '2x #forge:gears/bronze'
        )
        .itemOutputs('thermal:fluid_cell_frame')
        .duration(100)
        .EUt(GTValues.V[GTValues.LV])

    //------------------------------------------------------------------------整合组件
    event.recipes.gtceu.assembler('thermal:upgrade_augment_1') //硬化整合组件
        .itemInputs(
            '4x #forge:ingots/invar',
            '2x minecraft:redstone_block',
            '4x #forge:gears/gold',
            '4x #c:glass_blocks'
        )
        .itemOutputs('thermal:upgrade_augment_1')
        .duration(200)
        .EUt(GTValues.V[GTValues.LV])

    event.recipes.gtceu.assembler('thermal:upgrade_augment_2') //强化整合组件
        .itemInputs(
            '4x #forge:ingots/electrum',
            '2x thermal:upgrade_augment_1',
            '4x thermal:signalum_gear',
            '4x minecraft:quartz_block'
        )
        .itemOutputs('thermal:upgrade_augment_2')
        .duration(400)
        .EUt(GTValues.V[GTValues.LV])

    event.recipes.gtceu.assembler('thermal:upgrade_augment_3') //谐振整合组件
        .itemInputs(
            '4x thermal:enderium_ingot',
            '2x thermal:upgrade_augment_2',
            '4x thermal:lumium_gear',
            '4x #thermal:glass/hardened'
        )
        .itemOutputs('thermal:upgrade_augment_3')
        .duration(600)
        .EUt(GTValues.V[GTValues.MV])

    event.recipes.gtceu.assembler('thermal_extra:upgrade_augment') //龙钢整合组件 Thermal_Extra
        .itemInputs(
            '4x thermal_extra:ancient_dust',
            '2x thermal:upgrade_augment_3',
            '4x thermal_extra:dragonsteel_gear',
            '4x #thermal:glass/hardened'
        )
        .itemOutputs('thermal_extra:upgrade_augment')
        .duration(1200)
        .EUt(GTValues.V[GTValues.MV])

    event.recipes.gtceu.assembler('thermal_extra:abyssal_upgrade_augment') //深渊整合组件 Thermal_Extra
        .itemInputs(
            '4x thermal_extra:ancient_dust',
            '2x thermal_extra:upgrade_augment',
            '4x thermal_extra:abyssal_gear',
            '4x #thermal:glass/hardened'
        )
        .itemOutputs('thermal_extra:abyssal_upgrade_augment')
        .duration(1600)
        .EUt(GTValues.V[GTValues.HV])
        
    //----------------------------------------------------------------------Thermal_Extra机器

    event.recipes.gtceu.assembler('thermal_extra:device_lava_gen') //积熔器 Thermal_Extra
        .itemInputs(
            '4x thermal_extra:soul_infused_rod',
            '4x minecraft:warped_wart_block',
            '4x thermal:redstone_servo',
            'minecraft:bucket',
            'minecraft:iron_block'
        )
        .itemOutputs('thermal_extra:device_lava_gen')
        .duration(1800)
        .EUt(GTValues.V[GTValues.MV])

    event.recipes.gtceu.assembler('thermal_extra:advanced_refinery') //高级精炼机 Thermal_Extra
        .itemInputs(
            '2x thermal_extra:twinite_ingot',
            '4x #thermal:glass/hardened',
            'thermal:machine_refinery',
            '2x thermal:electrum_gear',
            '2x thermal:rf_coil'
        )
        .itemOutputs('thermal_extra:advanced_refinery')
        .duration(1800)
        .EUt(GTValues.V[GTValues.HV])

    event.recipes.gtceu.assembler('thermal_extra:nitratic_igniter') //硝化起爆机 Thermal_Extra
        .itemInputs(
            '4x thermal_extra:twinite_rod',
            '4x thermal_extra:polyolefin_plate',
            'thermal:machine_frame',
            '4x thermal:signalum_gear',
            '2x thermal:rf_coil'
        )
        .itemOutputs('thermal_extra:nitratic_igniter')
        .duration(2000)
        .EUt(GTValues.V[GTValues.HV])

    event.recipes.gtceu.assembler('thermal_extra:fluid_mixer') //流体混合机 Thermal_Extra
        .itemInputs(
            '4x thermal_extra:soul_infused_ingot',
            '4x #thermal:glass/hardened',
            'thermal:machine_frame',
            '4x thermal:constantan_gear',
            '2x thermal:rf_coil'
        )
        .itemOutputs('thermal_extra:fluid_mixer')
        .duration(2000)
        .EUt(GTValues.V[GTValues.HV])

    event.recipes.gtceu.assembler('thermal_extra:component_assembly') //部件装配机 Thermal_Extra
        .itemInputs(
            '4x thermal_extra:polyolefin_plate',
            'thermal:machine_frame',
            '4x thermal:enderium_gear',
            '2x thermal:rf_coil'
        )
        .itemOutputs('thermal_extra:component_assembly')
        .duration(2000)
        .EUt(GTValues.V[GTValues.HV])

    event.recipes.gtceu.assembler('thermal_extra:endothermic_dehydrator') //吸热脱水机 Thermal_Extra
        .itemInputs(
            '4x thermal_extra:twinite_ingot',
            '4x #thermal:glass/hardened',
            'thermal:machine_frame',
            '4x thermal:lumium_gear',
            '2x thermal:rf_coil'
        )
        .itemOutputs('thermal_extra:endothermic_dehydrator')
        .duration(2000)
        .EUt(GTValues.V[GTValues.HV])

})