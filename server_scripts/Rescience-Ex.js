ServerEvents.recipes(event => {
    const oreDustMapping = {
      'iron': '#forge:dusts/iron',           // 铁矿 -> 铁粉
      'copper': '#forge:dusts/copper',       // 铜矿 -> 铜粉
      'gold': '#forge:dusts/gold',           // 金矿 -> 金粉
      'lapis': '#forge:dusts/lapis',         // 青金石 -> 青金石粉
      'coal': '#forge:dusts/coal',           // 煤矿 -> 煤粉
      'diamond': '#forge:dusts/diamond',     // 钻石矿 -> 钻石粉
      'quartz': '#forge:dusts/quartz',       // 下界石英矿 -> 下界石英粉
      'emerald': '#forge:dusts/emerald'     // 绿宝石矿 -> 绿宝石粉
    };
  
    // 处理常规矿石
    Object.keys(oreDustMapping).forEach(ore => {
      // 常规矿石处理
      event.recipes.createMixing(
        [
          Item.of(oreDustMapping[ore]).withChance(1.0), // 产出对应粉尘
          Item.of(oreDustMapping[ore]).withChance(1.0),
          Item.of(oreDustMapping[ore]).withChance(1.0),
          Item.of(oreDustMapping[ore]).withChance(1.0)
        ],
        [Item.of(`#forge:ores/${ore}`)] // 输入矿物
      ).processingTime(100);
  
      // 深层矿石处理
      event.recipes.createMixing(
        [
          Item.of(oreDustMapping[ore]).withChance(1.0), // 产出对应粉尘
          Item.of(oreDustMapping[ore]).withChance(1.0),
          Item.of(oreDustMapping[ore]).withChance(1.0),
          Item.of(oreDustMapping[ore]).withChance(1.0)
        ],
        [Item.of(`minecraft:deepslate_${ore}_ore`)] // 输入深层矿物
      ).processingTime(100);
    });
  
    // 处理青金石宝石
    event.recipes.createMixing(
      [
        Item.of('#forge:dusts/lapis').withChance(1.0),
        Item.of('#forge:dusts/lapis').withChance(1.0),
        Item.of('#forge:dusts/lapis').withChance(1.0),
        Item.of('#forge:dusts/lapis').withChance(1.0)
      ],
      [Item.of('#forge:gems/lapis')] // 输入青金石宝石
    ).processingTime(100);
    
    // 处理红石矿石
    event.recipes.createMixing(
      [
        Item.of('minecraft:redstone').withChance(1.0), // 产出6个红石
        Item.of('minecraft:redstone').withChance(1.0),
        Item.of('minecraft:redstone').withChance(1.0),
        Item.of('minecraft:redstone').withChance(1.0),
        Item.of('minecraft:redstone').withChance(1.0),
        Item.of('minecraft:redstone').withChance(1.0)
      ],
      [Item.of('#forge:ores/redstone')] // 输入红石矿
    ).processingTime(100);
  
    // 处理深层红石矿石
    event.recipes.createMixing(
      [
        Item.of('minecraft:redstone').withChance(1.0), // 产出6个红石
        Item.of('minecraft:redstone').withChance(1.0),
        Item.of('minecraft:redstone').withChance(1.0),
        Item.of('minecraft:redstone').withChance(1.0),
        Item.of('minecraft:redstone').withChance(1.0),
        Item.of('minecraft:redstone').withChance(1.0)
      ],
      [Item.of('minecraft:deepslate_redstone_ore')] // 输入深层红石矿
    ).processingTime(100);
});
ServerEvents.recipes(event => {
  event.recipes.gtceu.autoclave('realistic_budding_amethyst')  // 唯一配方 ID
      .itemInputs('gtceu:amethyst_dust')  // 输入：紫水晶碎片
      .inputFluids(Fluid.of('gtceu:silicon', 2304))  // 输入流体：500mB液态硅
      .itemOutputs('minecraft:budding_amethyst')  // 输出：紫水晶母岩
      .duration(9000)  // 配方持续时间：12000 ticks (10 分钟)
      .EUt(96);  // 设置较高能耗以表示高温环境
});
ServerEvents.recipes(event => {
  // 石英玻璃
  event.recipes.gtceu.alloy_smelter('enderio_fused_quartz')
      .itemInputs('minecraft:quartz_block')
      .itemOutputs('enderio:fused_quartz')
      .duration(6400)
      .EUt(30);

  event.recipes.gtceu.alloy_smelter('enderio_fused_quartz_2')
      .itemInputs('4x minecraft:quartz')
      .itemOutputs('enderio:fused_quartz')
      .duration(6400)
      .EUt(30);

  // 暗色石英玻璃
  event.recipes.gtceu.alloy_smelter('enderio_fused_quartz_d')
      .itemInputs('minecraft:quartz_block', 'minecraft:amethyst_block')
      .itemOutputs('enderio:fused_quartz_d')
      .duration(6400)
      .EUt(30);

  event.recipes.gtceu.alloy_smelter('enderio_fused_quartz_d2')
      .itemInputs('4x minecraft:quartz', 'minecraft:amethyst_block')
      .itemOutputs('enderio:fused_quartz_d')
      .duration(6400)
      .EUt(30);

  event.recipes.gtceu.alloy_smelter('enderio_fused_quartz_d3')
      .itemInputs('minecraft:quartz_block', '4x minecraft:amethyst_shard')
      .itemOutputs('enderio:fused_quartz_d')
      .duration(6400)
      .EUt(30);

  event.recipes.gtceu.alloy_smelter('enderio_fused_quartz_d4')
      .itemInputs('4x minecraft:quartz', '4x minecraft:amethyst_shard')
      .itemOutputs('enderio:fused_quartz_d')
      .duration(6400)
      .EUt(30);

  event.recipes.gtceu.alloy_smelter('enderio_fused_quartz_d5')
      .itemInputs('enderio:fused_quartz', 'minecraft:amethyst_block')
      .itemOutputs('enderio:fused_quartz_d')
      .duration(6400)
      .EUt(30);

  event.recipes.gtceu.alloy_smelter('enderio_fused_quartz_d6')
      .itemInputs('enderio:fused_quartz', '4x minecraft:amethyst_shard')
      .itemOutputs('enderio:fused_quartz_d')
      .duration(6400)
      .EUt(30);

  // 荧光石英玻璃
  event.recipes.gtceu.alloy_smelter('enderio_fused_quartz_e')
      .itemInputs('minecraft:quartz_block', 'minecraft:glowstone')
      .itemOutputs('enderio:fused_quartz_e')
      .duration(6400)
      .EUt(30);

  event.recipes.gtceu.alloy_smelter('enderio_fused_quartz_e2')
      .itemInputs('4x minecraft:quartz', 'minecraft:glowstone')
      .itemOutputs('enderio:fused_quartz_e')
      .duration(6400)
      .EUt(30);

  event.recipes.gtceu.alloy_smelter('enderio_fused_quartz_e3')
      .itemInputs('minecraft:quartz_block', '4x minecraft:glowstone_dust')
      .itemOutputs('enderio:fused_quartz_e')
      .duration(6400)
      .EUt(30);

  event.recipes.gtceu.alloy_smelter('enderio_fused_quartz_e4')
      .itemInputs('4x minecraft:quartz', '4x minecraft:glowstone_dust')
      .itemOutputs('enderio:fused_quartz_e')
      .duration(6400)
      .EUt(30);

  event.recipes.gtceu.alloy_smelter('enderio_fused_quartz_e5')
      .itemInputs('enderio:fused_quartz', 'minecraft:glowstone')
      .itemOutputs('enderio:fused_quartz_e')
      .duration(6400)
      .EUt(30);

  event.recipes.gtceu.alloy_smelter('enderio_fused_quartz_e6')
      .itemInputs('enderio:fused_quartz', '4x minecraft:glowstone_dust')
      .itemOutputs('enderio:fused_quartz_e')
      .duration(6400)
      .EUt(30);
});