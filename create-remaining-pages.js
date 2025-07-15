// 批量生成剩余的所有页面
const fs = require('fs');

// 页面模板
const pageTemplate = (title, category, emoji, description) => `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title} - Vax Fridge</title>
    <link rel="stylesheet" href="styles.css">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
</head>
<body>
    <!-- Navigation -->
    <nav class="fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-md border-b border-white/20">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between items-center h-16">
                <div class="flex items-center">
                    <a href="index.html" class="text-white text-xl font-bold">Vax Fridge 🧊</a>
                </div>
                <div class="hidden md:block">
                    <div class="ml-10 flex items-baseline space-x-4">
                        <div class="dropdown">
                            <a href="#" class="text-white hover:text-blue-200 px-3 py-2 text-sm font-medium">Problem & Context</a>
                            <div class="dropdown-content">
                                <a href="project-background.html">Project Background</a>
                                <a href="ecosystem.html">mRNA Vaccine Ecosystem</a>
                                <a href="cold-chain-challenges.html">Cold Chain Challenges</a>
                                <a href="case-studies.html">Case Studies</a>
                                <a href="contact.html">Contact</a>
                            </div>
                        </div>
                        <div class="dropdown">
                            <a href="#" class="text-white hover:text-blue-200 px-3 py-2 text-sm font-medium">The Solution: Vax Fridge</a>
                            <div class="dropdown-content">
                                <a href="features.html">Core Features</a>
                                <a href="technology.html">Technology Overview</a>
                                <a href="solar-power.html">Solar Power System</a>
                                <a href="temperature-control.html">Temperature Control</a>
                                <a href="monitoring.html">Remote Monitoring</a>
                                <a href="compliance.html">GMP Compliance</a>
                                <a href="deployment.html">Deployment Process</a>
                                <a href="maintenance.html">Maintenance</a>
                                <a href="cost-analysis.html">Cost Analysis</a>
                            </div>
                        </div>
                        <div class="dropdown">
                            <a href="#" class="text-white hover:text-blue-200 px-3 py-2 text-sm font-medium">Professionalism & Impact</a>
                            <div class="dropdown-content">
                                <a href="clinical-trials.html">Clinical Trials</a>
                                <a href="regulatory-approval.html">Regulatory Approval</a>
                                <a href="partnerships.html">Strategic Partnerships</a>
                                <a href="global-impact.html">Global Impact</a>
                                <a href="sustainability.html">Sustainability</a>
                                <a href="quality-assurance.html">Quality Assurance</a>
                                <a href="innovation.html">Innovation Pipeline</a>
                                <a href="awards.html">Awards & Recognition</a>
                            </div>
                        </div>
                        <div class="dropdown">
                            <a href="#" class="text-white hover:text-blue-200 px-3 py-2 text-sm font-medium">Support & Resources</a>
                            <div class="dropdown-content">
                                <a href="documentation.html">Documentation</a>
                                <a href="training.html">Training Programs</a>
                                <a href="technical-support.html">Technical Support</a>
                            </div>
                        </div>
                        <div class="dropdown">
                            <a href="#" class="text-white hover:text-blue-200 px-3 py-2 text-sm font-medium">About & Get Involved</a>
                            <div class="dropdown-content">
                                <a href="our-team.html">Our Team</a>
                                <a href="mission.html">Mission & Vision</a>
                                <a href="careers.html">Careers</a>
                                <a href="investors.html">For Investors</a>
                                <a href="media.html">Media & Press</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>

    <!-- Background -->
    <div class="background-container">
        <div class="bg-layer bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900"></div>
        <div class="bg-layer bg-gradient-to-tr from-blue-900/50 via-purple-900/30 to-teal-900/40"></div>
        <div class="floating-elements">
            <div class="floating-emoji">${emoji}</div>
        </div>
    </div>

    <!-- Main Content -->
    <main class="relative z-10 pt-20">
        <section class="py-20">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center">
                    <h1 class="text-4xl md:text-6xl font-bold text-white mb-6">${title}</h1>
                    <p class="text-xl md:text-2xl text-gray-300 mb-8">${description}</p>
                </div>
            </div>
        </section>

        <section class="py-20">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="glass-card p-8">
                    <h2 class="text-3xl font-bold text-white mb-6">${category}</h2>
                    <p class="text-gray-300 mb-6">
                        Comprehensive information about ${title.toLowerCase()} and its role in the Vax Fridge ecosystem. 
                        Our commitment to excellence ensures the highest standards in vaccine cold chain management.
                    </p>
                </div>
            </div>
        </section>
    </main>

    <script src="script.js"></script>
</body>
</html>`;

// 剩余需要创建的页面
const remainingPages = [
    // Vax Fridge 解决方案类别剩余页面
    { filename: 'cost-analysis.html', title: 'Cost Analysis', category: 'Economic Analysis', emoji: '💰', description: 'Comprehensive cost-benefit analysis for Vax Fridge deployment' },
    
    // 专业性与影响类别 (8页)
    { filename: 'clinical-trials.html', title: 'Clinical Trials', category: 'Clinical Evidence', emoji: '🧪', description: 'Rigorous clinical testing and validation results' },
    { filename: 'regulatory-approval.html', title: 'Regulatory Approval', category: 'Compliance', emoji: '📋', description: 'International regulatory approvals and certifications' },
    { filename: 'partnerships.html', title: 'Strategic Partnerships', category: 'Collaboration', emoji: '🤝', description: 'Global partnerships driving Vax Fridge adoption' },
    { filename: 'global-impact.html', title: 'Global Impact', category: 'Impact Assessment', emoji: '🌍', description: 'Measuring our worldwide impact on vaccine accessibility' },
    { filename: 'sustainability.html', title: 'Sustainability', category: 'Environmental Impact', emoji: '🌱', description: 'Environmental sustainability and carbon footprint reduction' },
    { filename: 'quality-assurance.html', title: 'Quality Assurance', category: 'Quality Control', emoji: '✅', description: 'Comprehensive quality management and testing protocols' },
    { filename: 'innovation.html', title: 'Innovation Pipeline', category: 'Research & Development', emoji: '🚀', description: 'Future innovations and technology roadmap' },
    { filename: 'awards.html', title: 'Awards & Recognition', category: 'Achievements', emoji: '🏆', description: 'Industry recognition and awards received' },
    
    // 支持与资源类别 (3页)
    { filename: 'documentation.html', title: 'Documentation', category: 'Technical Resources', emoji: '📚', description: 'Complete documentation and user guides' },
    { filename: 'training.html', title: 'Training Programs', category: 'Education', emoji: '🎓', description: 'Comprehensive training programs for Vax Fridge operations' },
    { filename: 'technical-support.html', title: 'Technical Support', category: 'Customer Support', emoji: '🛠️', description: '24/7 technical support and maintenance services' },
    
    // 关于我们类别 (5页)
    { filename: 'our-team.html', title: 'Our Team', category: 'About Us', emoji: '👥', description: 'Meet the experts behind Vax Fridge innovation' },
    { filename: 'mission.html', title: 'Mission & Vision', category: 'Company Values', emoji: '🎯', description: 'Our mission to democratize vaccine access worldwide' },
    { filename: 'careers.html', title: 'Careers', category: 'Join Us', emoji: '💼', description: 'Career opportunities in global health technology' },
    { filename: 'investors.html', title: 'For Investors', category: 'Investment', emoji: '📈', description: 'Investment opportunities and financial information' },
    { filename: 'media.html', title: 'Media & Press', category: 'Press Center', emoji: '📰', description: 'Latest news, press releases, and media coverage' }
];

// 生成所有页面
remainingPages.forEach(page => {
    const content = pageTemplate(page.title, page.category, page.emoji, page.description);
    fs.writeFileSync(page.filename, content);
    console.log(`Created ${page.filename}`);
});

console.log('所有页面创建完成！'); 