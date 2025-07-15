const fs = require('fs');
const path = require('path');

// 获取所有HTML文件
const htmlFiles = fs.readdirSync('.').filter(file => file.endsWith('.html'));

console.log('开始删除Case Studies链接...');

htmlFiles.forEach(file => {
    try {
        let content = fs.readFileSync(file, 'utf8');
        let modified = false;
        
        // 删除Case Studies链接的各种变体
        const patterns = [
            /<a href="case-studies\.html">Case Studies<\/a>/g,
            /<a href="case-studies\.html">案例研究 \(Case Studies\)<\/a>/g,
            /<li><a href="case-studies\.html">✅ Case Studies<\/a><\/li>/g,
            /<li><a href="case-studies\.html">Case Studies<\/a><\/li>/g,
            /\s*<a href="case-studies\.html">Case Studies<\/a>\s*/g
        ];
        
        patterns.forEach(pattern => {
            if (pattern.test(content)) {
                content = content.replace(pattern, '');
                modified = true;
            }
        });
        
        if (modified) {
            fs.writeFileSync(file, content);
            console.log(`${file}: 已删除Case Studies链接`);
        } else {
            console.log(`${file}: 未找到Case Studies链接`);
        }
    } catch (error) {
        console.error(`处理 ${file} 时出错:`, error.message);
    }
});

console.log('Case Studies链接删除完成！'); 