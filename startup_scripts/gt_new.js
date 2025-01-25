GTCEuStartupEvents.registry('gtceu:element', e => {
    e.create('antimatterium', 1000, 1, -1, null, 'Am', false)
})
GTCEuStartupEvents.registry('gtceu:material', e => {

    // 注册反物质
    e.create('antimatterium')
        .color(0xEC80C8)
        .secondaryColor(0xD180EC)
        .ingot()
        ['fluid(com.gregtechceu.gtceu.api.fluids.store.FluidStorageKey,com.gregtechceu.gtceu.api.fluids.FluidBuilder)'](GTFluidStorageKeys.LIQUID, new GTFluidBuilder().temperature(100000))
        .iconSet(GTMaterialIconSet.DULL)
        .components('1x uranium', '2x plutonium', '3x thorium', '1x polonium') // 使用铀、钚、钍和钋的组合
        .flags(
            GTMaterialFlags.GENERATE_PLATE,
            GTMaterialFlags.GENERATE_BOLT_SCREW,
            GTMaterialFlags.GENERATE_FRAME,
            GTMaterialFlags.GENERATE_ROD,
            GTMaterialFlags.GENERATE_GEAR,
            GTMaterialFlags.GENERATE_SMALL_GEAR,
            GTMaterialFlags.GENERATE_FINE_WIRE,
            GTMaterialFlags.GENERATE_SPRING
        )
        // 添加导线属性，使用极限压电压区间
        .cableProperties(131073, 2, 0, true)

    // 注册钋
    e.create('polonrinium')
        .color(0x27B755)
        .secondaryColor(0x6BDC8F)
        .ingot()
        ['fluid(com.gregtechceu.gtceu.api.fluids.store.FluidStorageKey,com.gregtechceu.gtceu.api.fluids.FluidBuilder)'](GTFluidStorageKeys.LIQUID, new GTFluidBuilder().temperature(1380))
        .iconSet(GTMaterialIconSet.DULL)
        .components('1x radon', '1x lead', '2x uranium', '1x polonium')
        .flags(
            GTMaterialFlags.GENERATE_PLATE,
            GTMaterialFlags.GENERATE_BOLT_SCREW,
            GTMaterialFlags.GENERATE_FRAME,
            GTMaterialFlags.GENERATE_ROD,
            GTMaterialFlags.GENERATE_GEAR,
            GTMaterialFlags.GENERATE_SMALL_GEAR,
            GTMaterialFlags.GENERATE_FINE_WIRE,
            GTMaterialFlags.GENERATE_SPRING
        )
        // 添加导线属性，使用超高压电压区间
        .cableProperties(2049, 2, 24, false)
    
    e.create('fluorixite')
        .color(0x8A2BE2) // 紫色的RGB颜色代码
        .secondaryColor(0xB04CFF) // 较浅的紫色作为次要颜色
        .ingot()
        ['fluid(com.gregtechceu.gtceu.api.fluids.store.FluidStorageKey,com.gregtechceu.gtceu.api.fluids.FluidBuilder)'](GTFluidStorageKeys.LIQUID, new GTFluidBuilder().temperature(1200))
        .iconSet(GTMaterialIconSet.RUBY)
        .components('1x fluorine', '1x silicon', '1x calcium', '2x oxygen')
        .flags(
            GTMaterialFlags.GENERATE_PLATE,
            GTMaterialFlags.GENERATE_ROD,
            GTMaterialFlags.GENERATE_GEAR,
            GTMaterialFlags.GENERATE_SMALL_GEAR,
            GTMaterialFlags.GENERATE_FINE_WIRE,
            GTMaterialFlags.GENERATE_SPRING
        )
        // 添加导线属性，使用高压电压区间
        .cableProperties(1024, 1, 16, false); // 电压: 1024（EV）, 电流: 1, 损耗: 16, 非超导体

    e.create('quantum_liquid_energy')
        .color(0x96F0FB)
        .secondaryColor(0x96ADFB)
        ['fluid(com.gregtechceu.gtceu.api.fluids.store.FluidStorageKey,com.gregtechceu.gtceu.api.fluids.FluidBuilder)'](GTFluidStorageKeys.LIQUID, new GTFluidBuilder().temperature(200))
})