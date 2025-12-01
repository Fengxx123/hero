// 英雄人物数据
const heroesData = [
    {
        id: 1,
        name: "邱少云",
        category: "革命烈士",
        period: "抗美援朝战争",
        description: "为了整体战斗胜利，在火海中严守潜伏纪律，壮烈牺牲",
        link: "pages/qiushaoyun.html",
        linkText: "查看事迹"
    },
    {
        id: 2,
        name: "董存瑞",
        category: "战斗英雄",
        period: "解放战争",
        description: "手托炸药包炸毁敌人碉堡，以自己的生命为部队开辟了前进道路",
        link: "pages/董存瑞.html",
        linkText: "铭记精神"
    },
    {
        id: 3,
        name: "赵一曼",
        category: "革命烈士",
        period: "抗日战争",
        description: "英勇斗争，舍子从戎，红枪白马英姿令日寇闻风丧胆",
        link: "pages/zhaoyiman.html",
        linkText: "传承信仰"
    },
];

// 页面加载完成后执行，避免因容器还没渲染就操作 DOM 导致报错
document.addEventListener('DOMContentLoaded', function() {
    // 获取容器
    const container = document.getElementById('hero-table-container');
    
    // 创建按钮容器
    const buttonsContainer = document.createElement('div');
    buttonsContainer.className = 'hero-buttons-container';
    
    // 填充按钮数据
    heroesData.forEach(hero => {
        // 创建英雄卡片
        const heroCard = document.createElement('div');
        heroCard.className = 'hero-card';
        
        // 创建英雄信息
        const heroInfo = document.createElement('div');
        heroInfo.className = 'hero-info';
        
        // 英雄名称
        const heroName = document.createElement('h3');
        heroName.className = 'hero-name';
        heroName.textContent = hero.name;
        heroInfo.appendChild(heroName);
        
        // 英雄描述
        const heroDesc = document.createElement('p');
        heroDesc.className = 'hero-description';
        heroDesc.textContent = hero.description;
        heroInfo.appendChild(heroDesc);
        
        // 英雄类别和时期
        const heroMeta = document.createElement('div');
        heroMeta.className = 'hero-meta';
        heroMeta.innerHTML = `<span class="category">${hero.category}</span> · <span class="period">${hero.period}</span>`;
        heroInfo.appendChild(heroMeta);
        
        // 创建按钮
        const link = document.createElement('a');
        link.href = hero.link;
        link.className = 'hero-button';
        link.innerHTML = `<i class="fas fa-info-circle"></i>${hero.linkText}`;
        
        // 添加点击事件
        link.addEventListener('click', function(e) {
            console.log(`查看 ${hero.name} 的详情`);
            // 不需要阻止默认行为，让链接正常跳转
        });
        
        // 组装卡片
        heroCard.appendChild(heroInfo);
        heroCard.appendChild(link);
        buttonsContainer.appendChild(heroCard);
    });
    
    container.appendChild(buttonsContainer);
    
    // 添加页面加载动画效果
    container.style.opacity = '0';
    container.style.transition = 'opacity 0.5s';
    
    setTimeout(() => {
        container.style.opacity = '1';
    }, 100);
});