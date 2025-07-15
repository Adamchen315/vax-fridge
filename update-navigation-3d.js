const fs = require('fs');
const path = require('path');

// 获取所有HTML文件
const htmlFiles = fs.readdirSync('.').filter(file => file.endsWith('.html') && file !== '3d-model.html');

// 要插入的3D模型链接
const modelLink = '                        <a href="3d-model.html">3D Model</a>';

// 要查找和替换的模式
const searchPattern = /(<a href="technology\.html">Technology Overview<\/a>\s*)/;
const replacement = '$1\n' + modelLink;

console.log('开始更新导航菜单...');

htmlFiles.forEach(file => {
    try {
        let content = fs.readFileSync(file, 'utf8');
        
        // 检查是否已经包含3D模型链接
        if (content.includes('3d-model.html')) {
            console.log(`${file}: 已包含3D模型链接，跳过`);
            return;
        }
        
        // 查找并替换
        if (searchPattern.test(content)) {
            content = content.replace(searchPattern, replacement);
            fs.writeFileSync(file, content);
            console.log(`${file}: 已更新导航菜单`);
        } else {
            console.log(`${file}: 未找到匹配的导航结构`);
        }
    } catch (error) {
        console.error(`处理 ${file} 时出错:`, error.message);
    }
});

console.log('导航菜单更新完成！'); 