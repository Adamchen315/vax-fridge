const fs = require('fs');

// 页面配置数据
const pages = [
    // Problem & Context Category
    {
        filename: 'case-studies.html',
        title: 'Case Studies',
        heroIcon: '📊',
        titleLine1: 'Real-World',
        titleLine2: 'Case Studies',
        subtitle: 'Success stories from vaccine distribution programs around the world',
        sectionTitle: 'Global Implementation Success',
        sectionSubtitle: 'Proven results from Vax Fridge deployments in challenging environments',
        contentText: 'Our case studies demonstrate the transformative impact of Vax Fridge technology in real-world scenarios, from remote islands to mountainous regions.',
        icons: ['📊', '🌍', '✅', '📈'],
        features: [
            { icon: '🏝️', title: 'Island Communities', desc: 'Successful deployment in 50+ island communities across Indonesia' },
            { icon: '🏔️', title: 'Mountain Regions', desc: 'Reliable vaccine storage in high-altitude regions of Papua New Guinea' }
        ],
        ctaTitle: 'Ready to Create Your Success Story?',
        ctaSubtitle: 'Join the growing network of successful Vax Fridge implementations',
        ctaButton1: 'Start Your Project',
        ctaButton2: 'View More Studies',
        ctaLink1: 'partnership-application.html',
        ctaLink2: 'resource-center.html'
    },
    {
        filename: 'comparison.html',
        title: 'Comparison',
        heroIcon: '⚖️',
        titleLine1: 'Technology',
        titleLine2: 'Comparison',
        subtitle: 'How Vax Fridge compares to traditional cold chain solutions',
        sectionTitle: 'Competitive Advantages',
        sectionSubtitle: 'Superior performance across all key metrics',
        contentText: 'Vax Fridge outperforms traditional cold chain solutions in reliability, cost-effectiveness, and sustainability.',
        icons: ['⚖️', '📊', '🥇', '💰'],
        features: [
            { icon: '🔋', title: 'Energy Independence', desc: '100% solar powered vs. grid dependency' },
            { icon: '💰', title: 'Lower TCO', desc: '40% lower total cost of ownership over 5 years' }
        ],
        ctaTitle: 'See the Difference',
        ctaSubtitle: 'Experience superior cold chain performance with Vax Fridge',
        ctaButton1: 'Request Demo',
        ctaButton2: 'Download Comparison',
        ctaLink1: 'contact.html',
        ctaLink2: 'resource-center.html'
    },
    // Solution Category
    {
        filename: 'solar-power.html',
        title: 'Solar Power System',
        heroIcon: '☀️',
        titleLine1: 'Solar-Powered',
        titleLine2: 'Innovation',
        subtitle: 'Sustainable energy solution for uninterrupted vaccine storage',
        sectionTitle: 'Advanced Solar Technology',
        sectionSubtitle: 'High-efficiency solar panels with intelligent power management',
        contentText: 'Our solar power system ensures continuous operation even in challenging weather conditions, with 72-hour battery backup.',
        icons: ['☀️', '🔋', '⚡', '🌱'],
        features: [
            { icon: '🔆', title: 'High Efficiency', desc: '22% solar panel efficiency with MPPT charge controllers' },
            { icon: '🔋', title: 'Extended Backup', desc: '72-hour operation without sunlight using lithium batteries' }
        ],
        ctaTitle: 'Harness Solar Power',
        ctaSubtitle: 'Sustainable energy for vaccine preservation worldwide',
        ctaButton1: 'Technical Specs',
        ctaButton2: 'Environmental Impact',
        ctaLink1: 'features.html',
        ctaLink2: 'cost-benefit.html'
    },
    {
        filename: '3d-model.html',
        title: '3D Model Visualization',
        heroIcon: '📐',
        titleLine1: '3D Model',
        titleLine2: 'Visualization',
        subtitle: 'Interactive 3D model showcasing Vax Fridge design and components',
        sectionTitle: 'Design Excellence',
        sectionSubtitle: 'Modular design optimized for performance and maintenance',
        contentText: 'Explore the innovative design of Vax Fridge through our interactive 3D model, highlighting key components and features.',
        icons: ['📐', '🔧', '💡', '🎯'],
        features: [
            { icon: '🔄', title: 'Modular Design', desc: 'Easy assembly and maintenance with standardized components' },
            { icon: '🛡️', title: 'Robust Construction', desc: 'Weather-resistant materials for extreme environments' }
        ],
        ctaTitle: 'Experience the Design',
        ctaSubtitle: 'Innovative engineering for global vaccine accessibility',
        ctaButton1: 'Exploded View',
        ctaButton2: 'Download CAD',
        ctaLink1: 'exploded-view.html',
        ctaLink2: 'resource-center.html'
    },
    // Impact Category
    {
        filename: 'what-is-gmp.html',
        title: 'What is GMP',
        heroIcon: '🏥',
        titleLine1: 'Good Manufacturing',
        titleLine2: 'Practice (GMP)',
        subtitle: 'Understanding international medical device standards and compliance',
        sectionTitle: 'GMP Standards Overview',
        sectionSubtitle: 'Ensuring safety and efficacy through rigorous quality standards',
        contentText: 'Good Manufacturing Practice (GMP) is a system for ensuring that products are consistently produced and controlled according to quality standards.',
        icons: ['🏥', '✅', '📋', '🔍'],
        features: [
            { icon: '📜', title: 'WHO Standards', desc: 'Compliance with World Health Organization guidelines' },
            { icon: '🎯', title: 'Quality Assurance', desc: 'Systematic approach to ensuring product quality' }
        ],
        ctaTitle: 'GMP Compliance Assured',
        ctaSubtitle: 'Vax Fridge meets all international medical device standards',
        ctaButton1: 'Certification Details',
        ctaButton2: 'Standards Comparison',
        ctaLink1: 'gmp-cleanroom.html',
        ctaLink2: 'standards-comparison.html'
    },
    {
        filename: 'cost-benefit.html',
        title: 'Cost-Benefit Analysis',
        heroIcon: '💰',
        titleLine1: 'Cost-Benefit',
        titleLine2: 'Analysis',
        subtitle: 'Demonstrating the economic value and ROI of Vax Fridge implementation',
        sectionTitle: 'Economic Impact',
        sectionSubtitle: 'Significant cost savings and improved health outcomes',
        contentText: 'Comprehensive analysis showing 40% reduction in vaccine waste and 60% lower operational costs compared to traditional solutions.',
        icons: ['💰', '📈', '💡', '🎯'],
        features: [
            { icon: '📉', title: 'Reduced Waste', desc: '40% reduction in vaccine spoilage and waste' },
            { icon: '⚡', title: 'Lower OpEx', desc: '60% reduction in ongoing operational expenses' }
        ],
        ctaTitle: 'Calculate Your Savings',
        ctaSubtitle: 'Discover the economic benefits for your organization',
        ctaButton1: 'ROI Calculator',
        ctaButton2: 'Financial Model',
        ctaLink1: 'contact.html',
        ctaLink2: 'resource-center.html'
    },
    // Resources Category
    {
        filename: 'faq.html',
        title: 'Frequently Asked Questions',
        heroIcon: '❓',
        titleLine1: 'Frequently Asked',
        titleLine2: 'Questions',
        subtitle: 'Common questions about Vax Fridge technology and implementation',
        sectionTitle: 'Common Questions',
        sectionSubtitle: 'Find answers to the most frequently asked questions about our technology',
        contentText: 'Our comprehensive FAQ covers technical specifications, implementation process, maintenance, and support options.',
        icons: ['❓', '💡', '🔧', '📞'],
        features: [
            { icon: '⚙️', title: 'Technical FAQs', desc: 'Detailed answers about specifications and performance' },
            { icon: '🤝', title: 'Implementation FAQs', desc: 'Guidance on deployment and setup processes' }
        ],
        ctaTitle: 'Still Have Questions?',
        ctaSubtitle: 'Our support team is ready to help with any additional questions',
        ctaButton1: 'Contact Support',
        ctaButton2: 'Technical Documentation',
        ctaLink1: 'contact.html',
        ctaLink2: 'resource-center.html'
    },
    {
        filename: 'resource-center.html',
        title: 'Resource Center',
        heroIcon: '📚',
        titleLine1: 'Resource',
        titleLine2: 'Center',
        subtitle: 'Technical documentation, white papers, and educational materials',
        sectionTitle: 'Comprehensive Resources',
        sectionSubtitle: 'Access to technical documentation, research papers, and implementation guides',
        contentText: 'Download technical specifications, implementation guides, research papers, and educational materials about cold chain technology.',
        icons: ['📚', '📄', '🔬', '💻'],
        features: [
            { icon: '📖', title: 'Technical Docs', desc: 'Detailed technical specifications and user manuals' },
            { icon: '🎓', title: 'Training Materials', desc: 'Educational resources for implementation teams' }
        ],
        ctaTitle: 'Access All Resources',
        ctaSubtitle: 'Comprehensive documentation for successful implementation',
        ctaButton1: 'Download Library',
        ctaButton2: 'Request Training',
        ctaLink1: 'contact.html',
        ctaLink2: 'partnership-application.html'
    },
    // About Category
    {
        filename: 'team.html',
        title: 'Our Team',
        heroIcon: '👥',
        titleLine1: 'Meet Our',
        titleLine2: 'Team',
        subtitle: 'The experts behind Vax Fridge innovation and global impact',
        sectionTitle: 'Expert Team',
        sectionSubtitle: 'World-class professionals dedicated to vaccine accessibility',
        contentText: 'Our multidisciplinary team combines expertise in medical technology, renewable energy, and global health initiatives.',
        icons: ['👥', '🌍', '💡', '🎯'],
        features: [
            { icon: '🔬', title: 'Medical Experts', desc: 'Leading professionals in vaccine technology and cold chain' },
            { icon: '⚡', title: 'Engineering Team', desc: 'Solar and refrigeration technology specialists' }
        ],
        ctaTitle: 'Join Our Mission',
        ctaSubtitle: 'Be part of the team transforming global vaccine accessibility',
        ctaButton1: 'Career Opportunities',
        ctaButton2: 'Partner With Us',
        ctaLink1: 'contact.html',
        ctaLink2: 'partnership-application.html'
    },
    {
        filename: 'partnership-application.html',
        title: 'Partnership Application',
        heroIcon: '🤝',
        titleLine1: 'Partnership',
        titleLine2: 'Application',
        subtitle: 'Apply to become a Vax Fridge partner and transform vaccine distribution',
        sectionTitle: 'Partnership Opportunities',
        sectionSubtitle: 'Multiple partnership models to suit different organizations and goals',
        contentText: 'We offer various partnership opportunities including distribution partnerships, technology licensing, and joint ventures.',
        icons: ['🤝', '🌍', '💼', '📈'],
        features: [
            { icon: '🌐', title: 'Global Network', desc: 'Join our worldwide network of partners and distributors' },
            { icon: '📊', title: 'Business Support', desc: 'Comprehensive training and ongoing business support' }
        ],
        ctaTitle: 'Start Your Partnership',
        ctaSubtitle: 'Begin the application process to join the Vax Fridge network',
        ctaButton1: 'Apply Now',
        ctaButton2: 'Partnership Info',
        ctaLink1: 'contact.html',
        ctaLink2: 'partnership-support.html'
    }
];

// 读取模板文件
const template = fs.readFileSync('template.html', 'utf8');

// 为每个页面生成HTML文件
pages.forEach(page => {
    let html = template;
    
    // 替换占位符
    html = html.replace(/{{PAGE_TITLE}}/g, page.title);
    html = html.replace(/{{HERO_ICON}}/g, page.heroIcon);
    html = html.replace(/{{TITLE_LINE1}}/g, page.titleLine1);
    html = html.replace(/{{TITLE_LINE2}}/g, page.titleLine2);
    html = html.replace(/{{SUBTITLE}}/g, page.subtitle);
    html = html.replace(/{{SECTION_TITLE}}/g, page.sectionTitle);
    html = html.replace(/{{SECTION_SUBTITLE}}/g, page.sectionSubtitle);
    html = html.replace(/{{CONTENT_TEXT}}/g, page.contentText);
    html = html.replace(/{{CTA_TITLE}}/g, page.ctaTitle);
    html = html.replace(/{{CTA_SUBTITLE}}/g, page.ctaSubtitle);
    html = html.replace(/{{CTA_BUTTON1}}/g, page.ctaButton1);
    html = html.replace(/{{CTA_BUTTON2}}/g, page.ctaButton2);
    html = html.replace(/{{CTA_LINK1}}/g, page.ctaLink1);
    html = html.replace(/{{CTA_LINK2}}/g, page.ctaLink2);
    
    // 替换图标
    page.icons.forEach((icon, index) => {
        html = html.replace(new RegExp(`{{ICON${index + 1}}}`, 'g'), icon);
    });
    
    // 替换功能特性
    if (page.features.length > 0) {
        html = html.replace(/{{FEATURE1_ICON}}/g, page.features[0].icon);
        html = html.replace(/{{FEATURE1_TITLE}}/g, page.features[0].title);
        html = html.replace(/{{FEATURE1_DESC}}/g, page.features[0].desc);
    }
    
    if (page.features.length > 1) {
        html = html.replace(/{{FEATURE2_ICON}}/g, page.features[1].icon);
        html = html.replace(/{{FEATURE2_TITLE}}/g, page.features[1].title);
        html = html.replace(/{{FEATURE2_DESC}}/g, page.features[1].desc);
    }
    
    // 写入文件
    fs.writeFileSync(page.filename, html);
    console.log(`Generated: ${page.filename}`);
});

console.log('All pages generated successfully!'); 