StartupEvents.registry('item',event=>{
    event.create('mindx:processing_catalyst',"basic").maxStackSize(64).burnTime(600).tooltip("更高效的燃料:催化剂")
    event.create('mindx:magic_star',"basic")
        .unstackable()
        .displayName("奇迹之星")
        .rarity("epic")
        .fireResistant(true)
        .tooltip(Component.blue("§b在科技与冒险的交汇处，唯有真正的勇者才能握紧这颗璀璨的星辰。"))
        .tooltip(Component.blue("§8属性："))
        .tooltip(Component.blue("- 稀有度：§6传说"))
        .tooltip(Component.blue("- 耐久度：§a永不磨损"))
        .tooltip(Component.blue("- 特殊能力：§c无限可能"))
        .tooltip(Component.blue("§8描述："))
        .tooltip(Component.blue("- 你已经超越了常人，探索了未知，挑战了极限。这不仅是一个物品，更是对你勇气与智慧的认可。"))
        .tooltip(Component.blue("- “奇迹之星”是科技与冒险精神的结晶，它代表着你在这个世界中所取得的成就与荣耀。"))
        .tooltip(Component.blue("- 持有它，你将拥有开启新篇章的力量，无论是在科技帝国的建设中，还是在未知领域的探索上。"))
        .tooltip(Component.blue("- 这是对你不懈努力的肯定，也是对未来无限可能的期待。让我们一同见证，你与“奇迹之星”共同创造的奇迹。"))
        .tooltip(Component.blue("§8获取认可："))
        .tooltip(Component.blue("- 每一位玩家都将知道你的成就，你的传奇将激励着后来者继续前行。"))
    event.create('mindx:uranium-polonium_compounds',"basic").maxStackSize(64).displayName("铀钋化合物")
    event.create('mindx:tp',"basic").displayName("传送")
    event.create('mindx:ppshop',"basic").displayName("点券商店")
    event.create('mindx:moneyshop',"basic").displayName("金币商店")
    event.create('mindx:welfare',"basic").displayName("福利")
    event.create('mindx:music',"basic").displayName("音乐")
    event.create('mindx:other',"basic").displayName("其他")
    event.create('mindx:vip',"basic").displayName("VIP")
    event.create('mindx:svip',"basic").displayName("SVIP")
    event.create('mindx:back',"basic").displayName("返回")
    event.create('mindx:getpoints',"basic").displayName("充值")
    event.create('mindx:titleshop',"basic").displayName("称号商城")
    event.create('mindx:titlebox',"basic").displayName("称号仓库")
    event.create('mindx:thingshop',"basic").displayName("道具商城")
    event.create('mindx:info',"basic").displayName("信息")
    event.create('mindx:dg',"basic").displayName("点歌")
    event.create('mindx:jineng',"basic").displayName("技能")
    event.create('mindx:forge',"basic").displayName("锻造")
    event.create('mindx:alloy_elector',"basic").displayName("量子能量晶体").tooltip(Component.yellow("万千能量,皆聚于此"))
    event.create('mindx:nrdc').food(food => {
        food
          .hunger(6)
          .saturation(1)
          .effect('minecraft:regeneration', 300, 0, 1)
          .removeEffect('minecraft:hunger')
          .alwaysEdible()
          .fastToEat()
          .meat()
          .eaten(ctx => {
            ctx.player.tell(Text.gold('你吃了一份饺子,感受到了阵阵暖意!\n感谢Cloud_Cake2006的饺子贴图!'))
        })})
    event.create('mindx:zrdc').food(food => {
        food
          .hunger(6)
          .saturation(1)
          .effect('minecraft:regeneration', 300, 0, 1)
          .removeEffect('minecraft:hunger')
          .alwaysEdible()
          .fastToEat()
          .meat()
          .eaten(ctx => {
            ctx.player.tell(Text.gold('你吃了一份饺子,感受到了阵阵暖意!'))
        })})
    event.create('mindx:xrsc').food(food => {
        food
          .hunger(6)
          .saturation(1)
          .effect('minecraft:regeneration', 300, 0, 1)
          .removeEffect('minecraft:hunger')
          .alwaysEdible()
          .fastToEat()
          .meat()
          .eaten(ctx => {
            ctx.player.tell(Text.gold('你吃了一份饺子,感受到了阵阵暖意!'))
        })})
    event.create('mindx:hx').food(food => {
        food
          .hunger(6)
          .saturation(1)
          .effect('minecraft:water_breathing', 300, 0, 1)
          .removeEffect('minecraft:hunger')
          .alwaysEdible()
          .fastToEat()
          .meat()
          .eaten(ctx => {
            ctx.player.tell(Text.gold('你吃了一份饺子,感受到了阵阵暖意,好似海神在召唤!'))
        })})
    event.create('mindx:jrmg').food(food => {
        food
          .hunger(6)
          .saturation(1)
          .effect('minecraft:absorption', 300, 0, 1)
          .removeEffect('minecraft:hunger')
          .alwaysEdible()
          .fastToEat()
          .meat()
          .eaten(ctx => {
            ctx.player.tell(Text.gold('你吃了一份饺子,感受到了阵阵暖意!'))
        })})
    event.create('mindx:chicken_wrap').food(food => {
        food
          .hunger(4)
          .saturation(2)
          .alwaysEdible()
          .meat()
          .eaten(ctx => {
            ctx.player.tell(Text.white('AUV~那叫一个地道!'))
        })})
    event.create('mindx:chicken_roll_slice').food(food => {
        food
          .hunger(3)
          .saturation(2)
          .alwaysEdible()
          .meat()
        })
    event.create('mindx:cafe_roll').food(food => {
        food
          .hunger(3)
          .saturation(2)
          .effect('minecraft:haste', 300, 0, 1)
          .alwaysEdible()
        })
    event.create('mindx:egg_roll').food(food => {
        food
          .hunger(3)
          .saturation(2)
          .alwaysEdible()
        })
    event.create('mindx:midori_roll_slice').food(food => {
        food
          .hunger(3)
          .saturation(2)
          .alwaysEdible()
        })
    event.create('mindx:tropical_roll').food(food => {
        food
          .hunger(3)
          .saturation(2)
          .alwaysEdible()
        })
});
StartupEvents.registry("enchantment", (event) => {
    event.create("mindx:technical")
        .trident()
        .wearable()
        .bow()
        .breakable()
        .crossbow()
        .vanishable()
        .weapon()
        .rare()
        .minLevel(1)
        .maxLevel(5)
        .damageBonus((level) => level * 1.25)
});
StartupEvents.registry("block", (event) => {
    event.create("mindx:compressed_redstone_block", "basic").displayName("压缩红石块")
    event.create("mindx:double_compressed_redstone_block", "basic").displayName("二重压缩红石块")
    event.create("mindx:triple_compressed_redstone_block", "basic").displayName("三重压缩红石块")
    event.create("mindx:ultimate_compressed_redstone_block", "basic").displayName("究极压缩红石块")
    event.create("mindx:extreme_compressed_redstone_block", "basic").displayName("终极压缩红石块")

    event.create("mindx:compressed_lapis_block", "basic").displayName("压缩青金石块")
    event.create("mindx:double_compressed_lapis_block", "basic").displayName("二重压缩青金石块")
    event.create("mindx:triple_compressed_lapis_block", "basic").displayName("三重压缩青金石块")
    event.create("mindx:ultimate_compressed_lapis_block", "basic").displayName("究极压缩青金石块")
    event.create("mindx:extreme_compressed_lapis_block", "basic").displayName("终极压缩青金石块")

    event.create("mindx:compressed_diamond_block", "basic").displayName("压缩钻石块")
    event.create("mindx:double_compressed_diamond_block", "basic").displayName("二重压缩钻石块")
    event.create("mindx:triple_compressed_diamond_block", "basic").displayName("三重压缩钻石块")
    event.create("mindx:ultimate_compressed_diamond_block", "basic").displayName("究极压缩钻石块")
    event.create("mindx:extreme_compressed_diamond_block", "basic").displayName("终极压缩钻石块")

    event.create("mindx:compressed_coal_block", "basic").displayName("压缩煤炭块")
    event.create("mindx:double_compressed_coal_block", "basic").displayName("二重压缩煤炭块")
    event.create("mindx:triple_compressed_coal_block", "basic").displayName("三重压缩煤炭块")
    event.create("mindx:ultimate_compressed_coal_block", "basic").displayName("究极压缩煤炭块")
    event.create("mindx:extreme_compressed_coal_block", "basic").displayName("终极压缩煤炭块")

    event.create("mindx:compressed_iron_block", "basic").displayName("压缩铁块")
    event.create("mindx:double_compressed_iron_block", "basic").displayName("二重压缩铁块")
    event.create("mindx:triple_compressed_iron_block", "basic").displayName("三重压缩铁块")
    event.create("mindx:ultimate_compressed_iron_block", "basic").displayName("究极压缩铁块")
    event.create("mindx:extreme_compressed_iron_block", "basic").displayName("终极压缩铁块")

    event.create("mindx:compressed_gold_block", "basic").displayName("压缩金块")
    event.create("mindx:double_compressed_gold_block", "basic").displayName("二重压缩金块")
    event.create("mindx:triple_compressed_gold_block", "basic").displayName("三重压缩金块")
    event.create("mindx:ultimate_compressed_gold_block", "basic").displayName("究极压缩金块")
    event.create("mindx:extreme_compressed_gold_block", "basic").displayName("终极压缩金块")

    event.create("mindx:compressed_emerald_block", "basic").displayName("压缩绿宝石块")
    event.create("mindx:double_compressed_emerald_block", "basic").displayName("二重压缩绿宝石块")
    event.create("mindx:triple_compressed_emerald_block", "basic").displayName("三重压缩绿宝石块")
    event.create("mindx:ultimate_compressed_emerald_block", "basic").displayName("究极压缩绿宝石块")
    event.create("mindx:extreme_compressed_emerald_block", "basic").displayName("终极压缩绿宝石块")

    event.create("mindx:compressed_netherite_block", "basic").displayName("压缩下界合金块")
    event.create("mindx:double_compressed_netherite_block", "basic").displayName("二重压缩下界合金块")
    event.create("mindx:triple_compressed_netherite_block", "basic").displayName("三重压缩下界合金块")
    event.create("mindx:ultimate_compressed_netherite_block", "basic").displayName("究极压缩下界合金块")
    event.create("mindx:extreme_compressed_netherite_block", "basic").displayName("终极压缩下界合金块")

    event.create("mindx:compressed_copper_block", "basic").displayName("压缩铜块")
    event.create("mindx:double_compressed_copper_block", "basic").displayName("二重压缩铜块")
    event.create("mindx:triple_compressed_copper_block", "basic").displayName("三重压缩铜块")
    event.create("mindx:ultimate_compressed_copper_block", "basic").displayName("究极压缩铜块")
    event.create("mindx:extreme_compressed_copper_block", "basic").displayName("终极压缩铜块")
});