ServerEvents.recipes(event => {
    event.replaceInput({id: 'ae2:network/crafting/cpu_crafting_unit'}, 'minecraft:iron_ingot', 'minecraft:iron_block')
    event.recipes.create.mechanical_crafting('ae2:flawless_budding_quartz', [
        'AAA',
        'AAA',
        'AAA'
      ], {
        A: 'ae2:flawed_budding_quartz'
}),
    event.recipes.create.mechanical_crafting('ae2:flawless_budding_quartz', [
        'AAAA',
        'AAAA',
        'AAAA',
        'AAAA'
    ], {
        A: 'ae2:chipped_budding_quartz'
}),
    event.shaped('ae2:sky_stone_block', [
        'ACA',
        'CBC',
        'ACA'
    ], {
        A: 'minecraft:cobblestone',
        B: 'ae2:charged_certus_quartz_crystal',
        C: 'minecraft:coal'
    });
    event.recipes.create.mechanical_crafting('ae2:flawless_budding_quartz', [
        'AAAAA',
        'AAAAA',
        'AAAAA',
        'AAAAA',
        'AAAAA'
    ], {
        A: 'ae2:damaged_budding_quartz'
    })

    //AE2: APPFLUX
    event.remove({id: 'appflux:inscriber/energy_print'})
    event.remove({id: 'appflux:inscriber/energy'})
    event.remove({id: 'appflux:fe_housing'})

    event.recipes.gtceu.circuit_assembler('appflux:printed_energy_processor') //能量电路板
        .itemInputs('appflux:charged_redstone','ad_astra:desh_ingot')
        .notConsumable('appflux:energy_processor_press')
        .inputFluids(Fluid.of('gtceu:fluorixite', 300))
        .itemOutputs('appflux:printed_energy_processor')
        .cleanroom(CleanroomType.CLEANROOM)
        .duration(900)
        .EUt(1024)

    event.recipes.gtceu.chemical_reactor('appflux:redstone_crystal') //Redstone Crystal
        .itemInputs('ae2:sky_dust', 'minecraft:redstone_block', 'ae2:fluix_dust', 'ad_astra:desh_ingot')
        .inputFluids(Fluid.of('gtceu:fluorixite', 300))
        .itemOutputs('appflux:redstone_crystal')
        .duration(900)
        .EUt(1024)

    event.recipes.gtceu.circuit_assembler('appflux:energy_processor') //能量处理器
        .itemInputs('appflux:printed_energy_processor','ae2:printed_silicon', 'minecraft:redstone', 'ad_astra:ostrum_ingot')
        .inputFluids(Fluid.of('gtceu:fluorixite', 300))
        .itemOutputs('appflux:energy_processor')
        .cleanroom(CleanroomType.CLEANROOM)
        .duration(1200)
        .EUt(1024)
    
    event.recipes.gtceu.assembler('appflux:fe_cell_housing') //ME FE元件外壳
        .itemInputs('3x appflux:harden_insulating_resin','2x ae2:quartz_vibrant_glass', '3x minecraft:redstone')
        .inputFluids(Fluid.of('gtceu:fluorixite', 300))
        .itemOutputs('appflux:fe_cell_housing')
        .duration(1600)
        .EUt(512)

    //AE2: MEGACELLS
    event.remove({id: 'megacells:inscriber/accumulation_processor_print'})
    event.remove({id: 'megacells:inscriber/accumulation_processor'})
    event.remove({id: 'megacells:cells/mega_item_cell_housing'})
    event.remove({id: 'megacells:cells/mega_fluid_cell_housing'})
    event.remove({id: 'megacells:transform/sky_steel_ingot'})

    event.recipes.gtceu.circuit_assembler('megacells:printed_accumulation_processor') //累积电路板
        .itemInputs('megacells:sky_steel_ingot','ad_astra:ostrum_ingot')
        .notConsumable('megacells:accumulation_processor_press')
        .inputFluids(Fluid.of('gtceu:fluorixite', 300))
        .itemOutputs('megacells:printed_accumulation_processor')
        .cleanroom(CleanroomType.CLEANROOM)
        .duration(900)
        .EUt(1024)

    event.recipes.gtceu.chemical_reactor('megacells:sky_steel_ingot') //陨钢锭
        .itemInputs('2x ae2:charged_certus_quartz_crystal', '2x minecraft:iron_ingot', '2x ae2:sky_stone_block')
        .inputFluids(Fluid.of('gtceu:fluorixite', 300))
        .itemOutputs('megacells:sky_steel_ingot')
        .duration(900)
        .EUt(1024)

    event.recipes.gtceu.circuit_assembler('megacells:accumulation_processor') //累积处理器
        .itemInputs('megacells:printed_accumulation_processor','ae2:printed_silicon', 'ae2:fluix_dust','ad_astra:ostrum_ingot')
        .inputFluids(Fluid.of('gtceu:fluorixite', 300))
        .itemOutputs('megacells:accumulation_processor')
        .cleanroom(CleanroomType.CLEANROOM)
        .duration(1200)
        .EUt(1024)

    event.recipes.gtceu.circuit_assembler('ae2:logic_processor') //逻辑处理器
        .itemInputs('ae2:printed_logic_processor','ae2:printed_silicon', 'minecraft:redstone')
        .inputFluids(Fluid.of('gtceu:fluorixite', 30))
        .itemOutputs('ae2:logic_processor')
        .duration(40)
        .EUt(GTValues.V[GTValues.LV])

    event.recipes.gtceu.circuit_assembler('ae2:calculation_processor') //运算处理器
        .itemInputs('ae2:printed_calculation_processor','ae2:printed_silicon', 'minecraft:redstone')
        .inputFluids(Fluid.of('gtceu:fluorixite', 30))
        .itemOutputs('ae2:calculation_processor')
        .duration(40)
        .EUt(GTValues.V[GTValues.LV])

    event.recipes.gtceu.circuit_assembler('ae2:engineering_processor') //工程处理器
        .itemInputs('ae2:printed_engineering_processor','ae2:printed_silicon', 'minecraft:redstone')
        .inputFluids(Fluid.of('gtceu:fluorixite', 30))
        .itemOutputs('ae2:engineering_processor')
        .duration(40)
        .EUt(GTValues.V[GTValues.LV])

    event.recipes.gtceu.assembler('megacells:mega_item_cell_housing') //MEGA物品元件外壳
        .itemInputs('3x megacells:sky_steel_ingot','2x ae2:quartz_vibrant_glass', '3x ae2:sky_dust')
        .inputFluids(Fluid.of('gtceu:fluorixite', 300))
        .itemOutputs('megacells:mega_item_cell_housing')
        .duration(1600)
        .EUt(512)

    event.recipes.gtceu.assembler('megacells:mega_fluid_cell_housing') //MEGA流体元件外壳
        .itemInputs('3x minecraft:copper_ingot','2x ae2:quartz_vibrant_glass', '3x ae2:sky_dust')
        .inputFluids(Fluid.of('gtceu:fluorixite', 300))
        .itemOutputs('megacells:mega_fluid_cell_housing')
        .duration(1600)
        .EUt(512)
    
    //AE2: APPBOT
    event.remove({id: 'appbot:mana_cell_housing'})

    event.recipes.gtceu.assembler('appbot:mana_cell_housing') //ME魔力元件外壳
        .itemInputs('3x botania:manasteel_ingot','2x ae2:quartz_vibrant_glass', '3x botania:life_essence')
        .inputFluids(Fluid.of('gtceu:fluorixite', 300))
        .itemOutputs('appbot:mana_cell_housing')
        .duration(1600)
        .EUt(512)
    
    //AE2: APPMEK
    event.remove({id: 'appmek:chemical_cell_housing'})

    event.recipes.gtceu.assembler('appmek:chemical_cell_housing') //ME化学品元件外壳
        .itemInputs('3x #forge:ingots/osmium','2x ae2:quartz_vibrant_glass', '3x minecraft:redstone')
        .inputFluids(Fluid.of('gtceu:fluorixite', 300))
        .itemOutputs('appmek:chemical_cell_housing')
        .duration(1600)
        .EUt(512)
    
    //AE2: WTLIB
    event.remove({id: 'ae2wtlib:quantum_bridge_card'})

    event.recipes.gtceu.assembler('ae2wtlib:quantum_bridge_card') //量子桥卡
        .itemInputs('2x ae2:fluix_pearl', 'ae2:wireless_receiver','ad_astra:ostrum_ingot')
        .inputFluids(Fluid.of('gtceu:fluorixite', 300))
        .itemOutputs('ae2wtlib:quantum_bridge_card')
        .duration(1600)
        .EUt(512)

    //AE2: BIGGER AE2
    event.remove({id: 'bigger_ae2:quantum_cell_component'})
    event.remove({id: 'bigger_ae2:digital_singularity_cell_component'})

    event.recipes.gtceu.assembler('bigger_ae2:quantum_cell_component') //量子存储组件
        .itemInputs('ae2:quartz_block', '3x ae2:cell_component_256k', '4x ae2:sky_dust', 'ae2:engineering_processor','ad_astra:ostrum_ingot')
        .inputFluids(Fluid.of('gtceu:fluorixite', 300))
        .itemOutputs('bigger_ae2:quantum_cell_component')
        .duration(900)
        .EUt(256)

    event.recipes.gtceu.assembler('bigger_ae2:digital_singularity_cell_component') //数字奇点存储组件
        .itemInputs('ae2:quartz_block', '3x bigger_ae2:quantum_cell_component', '4x ae2:sky_dust', 'ae2:engineering_processor','ad_astra:ostrum_ingot')
        .inputFluids(Fluid.of('gtceu:fluorixite', 300))
        .itemOutputs('bigger_ae2:digital_singularity_cell_component')
        .duration(1800)
        .EUt(256)
    //AE2: AE2THINGS
    event.remove({id: 'ae2things:cells/disk_housing'})
    
    event.recipes.gtceu.assembler('ae2things:disk_housing') //ME深度物品存储磁盘外壳
        .itemInputs('2x minecraft:netherite_ingot','2x ae2:quartz_vibrant_glass', '3x minecraft:redstone', 'minecraft:amethyst_shard')
        .inputFluids(Fluid.of('gtceu:fluorixite', 300))
        .itemOutputs('ae2things:disk_housing')
        .duration(1800)
        .EUt(256)

    //AE2&GTM

    event.recipes.gtceu.extractor('gtceu:fluorixite') //提取液态福鲁伊克斯
        .itemInputs('ae2:fluix_crystal')
        .outputFluids(Fluid.of('gtceu:fluorixite', 10))
        .duration(100)
        .EUt(32)
    
    //AE2: EXPATTERNPROVIDER: 
    event.remove({output: 'expatternprovider:ex_io_port'})
    event.remove({id: 'expatternprovider:epp'})
    event.remove({id: 'expatternprovider:ei'})
    event.remove({output: 'expatternprovider:ex_charger'})
    event.remove({output: 'expatternprovider:ex_inscriber'})
    event.remove({output: 'expatternprovider:ex_molecular_assembler'})
    event.remove({output: 'expatternprovider:ex_drive'})
    event.remove({output: 'expatternprovider:wireless_connect'})
    
    event.recipes.gtceu.assembler('expatternprovider:ex_io_port') //ME扩展IO端口
        .itemInputs('4x ae2:speed_card','2x ae2:engineering_processor', '2x ae2:logic_processor', 'ae2:io_port')
        .inputFluids(Fluid.of('gtceu:fluorixite', 300))
        .itemOutputs('expatternprovider:ex_io_port')
        .duration(1800)
        .EUt(256)

    event.recipes.gtceu.assembler('expatternprovider:wireless_connect') //ME无线连接器
        .itemInputs('4x ae2:sky_dust','2x ae2:wireless_receiver', '2x #ae2:smart_cable', 'ae2:engineering_processor')
        .inputFluids(Fluid.of('gtceu:fluorixite', 300))
        .itemOutputs('expatternprovider:wireless_connect')
        .duration(1800)
        .EUt(256)

    event.recipes.gtceu.assembler('expatternprovider:ex_drive') //ME扩展驱动器
        .itemInputs('ae2:drive','2x #ae2:glass_cable', '2x ae2:fluix_dust', 'ae2:capacity_card')
        .inputFluids(Fluid.of('gtceu:fluorixite', 300))
        .itemOutputs('expatternprovider:ex_drive')
        .duration(1800)
        .EUt(256)

    event.recipes.gtceu.assembler('expatternprovider:ex_molecular_assembler') //ME扩展分子装配室
        .itemInputs('4x ae2:fluix_crystal','4x ae2:molecular_assembler', 'ae2:engineering_processor')
        .inputFluids(Fluid.of('gtceu:fluorixite', 300))
        .itemOutputs('expatternprovider:ex_molecular_assembler')
        .duration(1800)
        .EUt(256)

    event.recipes.gtceu.assembler('expatternprovider:ex_inscriber') //ME扩展压印室
        .itemInputs('#ae2:interface','4x ae2:storage_bus', '4x ae2:inscriber')
        .inputFluids(Fluid.of('gtceu:fluorixite', 300))
        .itemOutputs('expatternprovider:ex_inscriber')
        .duration(1800)
        .EUt(256)

    event.recipes.gtceu.assembler('expatternprovider:ex_charger') //ME扩展充能器
        .itemInputs('#ae2:interface','4x ae2:storage_bus','4x ae2:charger')
        .inputFluids(Fluid.of('gtceu:fluorixite', 300))
        .itemOutputs('expatternprovider:ex_charger')
        .duration(1800)
        .EUt(256)

    event.recipes.gtceu.assembler('expatternprovider:ex_pattern_provider') //ME扩展样板供应器
        .itemInputs('#ae2:pattern_provider','2x ae2:capacity_card','ae2:engineering_processor')
        .inputFluids(Fluid.of('gtceu:fluorixite', 300))
        .itemOutputs('expatternprovider:ex_pattern_provider')
        .duration(1800)
        .EUt(256)
    
    event.recipes.gtceu.assembler('expatternprovider:ex_interface') //ME扩展接口
        .itemInputs('#ae2:interface','2x ae2:capacity_card','ae2:logic_processor')
        .inputFluids(Fluid.of('gtceu:fluorixite', 300))
        .itemOutputs('expatternprovider:ex_interface')
        .duration(1800)
        .EUt(256)

    //AE2: 电路板
    event.recipes.gtceu.extruder('ae2:printed_engineering_processor')  //工程电路板
        .itemInputs('minecraft:diamond')
        .notConsumable('ae2:engineering_processor_press')
        .itemOutputs('ae2:printed_engineering_processor')
        .duration(20)
        .EUt(32)

    event.recipes.gtceu.extruder('ae2:printed_calculation_processor')  //运算电路板
        .itemInputs('ae2:certus_quartz_crystal')
        .notConsumable('ae2:calculation_processor_press')
        .itemOutputs('ae2:printed_calculation_processor')
        .duration(20)
        .EUt(32)

    event.recipes.gtceu.extruder('ae2:printed_logic_processor')  //逻辑电路板
        .itemInputs('minecraft:gold_ingot')
        .notConsumable('ae2:logic_processor_press')
        .itemOutputs('ae2:printed_logic_processor')
        .duration(20)
        .EUt(32)

    event.recipes.gtceu.extruder('ae2:printed_silicon')  //硅板
        .itemInputs('#forge:silicon')
        .notConsumable('ae2:silicon_press')
        .itemOutputs('ae2:printed_silicon')
        .duration(20)
        .EUt(32)

    event.recipes.gtceu.extruder('appflux:energy_processor_press')  //能量印压模版
        .itemInputs('minecraft:iron_block')
        .notConsumable('appflux:energy_processor_press')
        .itemOutputs('appflux:energy_processor_press')
        .duration(60)
        .EUt(32)

    event.recipes.gtceu.extruder('ae2:silicon_press')  //硅印压模版
        .itemInputs('minecraft:iron_block')
        .notConsumable('ae2:silicon_press')
        .itemOutputs('ae2:silicon_press')
        .duration(60)
        .EUt(32)

    event.recipes.gtceu.assembler('megacells:accumulation_processor_press')  //累积印压模版
        .itemInputs('ae2:singularity')
        .notConsumable('ae2:engineering_processor_press')
        .notConsumable('ae2:calculation_processor_press')
        .itemOutputs('megacells:accumulation_processor_press')
        .duration(60)
        .EUt(128)

    event.recipes.gtceu.extruder('ae2:logic_processor_press')  //逻辑印压模版
        .itemInputs('minecraft:iron_block')
        .notConsumable('ae2:logic_processor_press')
        .itemOutputs('ae2:logic_processor_press')
        .duration(60)
        .EUt(32)

    event.recipes.gtceu.extruder('ae2:calculation_processor_press')  //运算印压模版
        .itemInputs('minecraft:iron_block')
        .notConsumable('ae2:calculation_processor_press')
        .itemOutputs('ae2:calculation_processor_press')
        .duration(60)
        .EUt(32)

    event.recipes.gtceu.extruder('ae2:engineering_processor_press')  //工程印压模版
        .itemInputs('minecraft:iron_block')
        .notConsumable('ae2:engineering_processor_press')
        .itemOutputs('ae2:engineering_processor_press')
        .duration(60)
        .EUt(32)

    event.recipes.gtceu.extruder('megacells:accumulation_processor_press')  //累计印压模版
        .itemInputs('minecraft:iron_block')
        .notConsumable('megacells:accumulation_processor_press')
        .itemOutputs('megacells:accumulation_processor_press')
        .duration(60)
        .EUt(32)

    event.recipes.gtceu.extruder('ae2:ender_dust')  //末影粉
        .itemInputs('minecraft:ender_pearl')
        .itemOutputs('ae2:ender_dust')
        .duration(20)
        .EUt(32)

    event.recipes.gtceu.extruder('ae2:certus_quartz_dust')  //赛特斯石英粉
        .itemInputs('#forge:gems/certus_quartz')
        .itemOutputs('ae2:certus_quartz_dust')
        .duration(20)
        .EUt(32)
})