// DMG Consultants - Bilingual Translation & Responsive Mobile Navigation Drawer Engine
// Supports English (EN) and Sinhala (සිංහල - SI)

const translations = {
    en: {
        // --- Shared Header & Footer ---
        nav_home: "Home",
        nav_services: "Services",
        nav_about: "About",
        nav_tax_updates: "Tax Updates",
        nav_contact: "Contact",
        nav_btn_quote: "Request a Quotation",
        footer_desc: "Professional Tax & Accounting Services. Ragama, Sri Lanka.",
        footer_nav_title: "Navigation",
        footer_res_title: "Resources",
        footer_legal_title: "Legal",
        footer_privacy: "Privacy Policy",
        footer_terms: "Terms of Service",
        footer_copyright: "© 2026 DMG Consultants. Professional Tax & Accounting Services. Ragama, Sri Lanka.",

        // --- Index (Home Page) ---
        hero_tag: "CBA & AAT Certified",
        hero_title: "Strategic Tax & Accounting Solutions <br><span class='text-secondary-fixed-dim'>Tailored for Your Growth.</span>",
        hero_desc: "Over 20 years of qualified excellence by CA Sri Lanka professionals. We provide high-net-worth and corporate clients with precise, authoritative financial clarity.",
        hero_btn_explore: "Explore Services",
        
        about_tag: "Heritage of Precision",
        about_title: "Authority Built on Decades of Corporate Insight",
        about_badge_years: "15+",
        about_badge_label: "Years Experience",
        about_badge_desc: "Senior corporate expertise as Group Accountant navigating complex financial landscapes.",
        about_p1: "At DMG Consultants, we move beyond basic compliance. We leverage deep-seated corporate experience to engineer financial strategies that protect and expand your wealth.",
        about_p2: "Our leadership brings over 15 years of rigorous, high-stakes experience as a Group Accountant, ensuring that every piece of advice is grounded in practical, real-world corporate success. We treat your financial architecture with the architectural precision it deserves.",
        about_li1: "Comprehensive corporate tax structuring.",
        about_li2: "End-to-end accounting and financial reporting.",
        about_li3: "Strict adherence to national compliance standards.",

        services_tag: "Core Capabilities",
        services_title: "Precision Engineered Services",
        services_card1_title: "Corporate Taxation",
        services_card1_desc: "Strategic tax planning and minimization strategies designed for high-net-worth entities and expanding corporations.",
        services_card2_title: "Statutory Compliance",
        services_card2_desc: "Bulletproof adherence to CA Sri Lanka and national regulatory frameworks, insulating your business from liability.",
        services_card3_title: "Executive Accounting",
        services_card3_desc: "High-level financial reporting and ledger management utilizing pure, tabular data for immediate executive clarity.",
        services_discover: "Discover More",

        updates_tag: "Insight & Analysis",
        updates_title: "Latest Tax Updates",
        updates_view_all: "View All Updates",
        updates_art1_tag: "Taxation",
        updates_art1_date: "October 15, 2024",
        updates_art1_title: "Implications of the New VAT Amendments for Corporate Entities",
        updates_art1_desc: "An executive summary of how the recent changes to Value Added Tax legislation will impact corporate cash flows in the upcoming fiscal quarter.",
        updates_art2_tag: "Compliance",
        updates_art2_date: "October 02, 2024",
        updates_art2_title: "Navigating CA Sri Lanka's Updated Reporting Standards",
        updates_art2_desc: "A breakdown of the critical adjustments required for annual financial reports to maintain absolute compliance with the revised national guidelines.",

        contact_tag: "Engage Our Firm",
        contact_title: "Secure a Professional Consultation.",
        contact_desc: "Connect with DMG Consultants to establish a bespoke financial strategy tailored to your exact corporate or individual requirements.",
        contact_office_title: "Corporate Office",
        contact_office_desc: "Ragama, Sri Lanka",
        contact_comm_title: "Direct Communication",
        contact_comm_desc: "dmgtaxconsultants@gmail.com",
        contact_phone_title: "Consultation Line",
        contact_phone_desc: "0782337999",

        form_title: "Request a Quotation",
        form_subtitle: "Please provide your details and requirements. Our senior consultants will respond within 24 hours.",
        form_first_name: "First Name",
        form_first_name_ph: "Enter your first name",
        form_last_name: "Last Name",
        form_last_name_ph: "Enter your last name",
        form_full_name: "Full Name",
        form_full_name_ph: "John Doe",
        form_company: "Company Name",
        form_company_ph: "Acme Corp",
        form_email: "Corporate Email",
        form_email_ph: "name@company.com",
        form_phone: "Contact Number",
        form_phone_ph: "+94 77 ...",
        form_service: "Service of Interest",
        form_service_ph: "Select a primary service",
        form_service_tax: "Corporate Taxation",
        form_service_compliance: "Statutory Compliance",
        form_service_accounting: "Executive Accounting",
        form_service_other: "Other Inquiry",
        form_msg: "Brief Context / Project Details",
        form_msg_ph: "Provide details regarding your financial requirements...",
        form_btn_submit: "Submit Request",

        // --- About Page ---
        about_hero_tag: "OUR HERITAGE",
        about_hero_title: "Trust Built on Precision & Experience",
        about_hero_desc: "For over 20 years, DMG Consultants has been the silent architect behind corporate financial success, offering unparalleled expertise in tax and accounting.",
        about_lead_title: "Leadership Excellence",
        about_lead_desc: "Guided by decades of high-level corporate financial management.",
        about_cba_badge: "CBA (CA Sri Lanka)",
        about_aat_badge: "AAT Member",
        about_profile_title: "Group Accountant Profile",
        about_profile_p1: "With over 20 years of dedicated experience as a Group Accountant, our founder has navigated complex financial landscapes for leading corporations. This extensive tenure guarantees a deep understanding of corporate finance, strategic tax planning, and rigorous compliance.",
        about_profile_p2: "Holding esteemed memberships with CA Sri Lanka (CBA) and AAT, the leadership embodies the pinnacle of professional accounting standards, ensuring every client receives authoritative and impeccable financial guidance.",
        about_stat_exp: "Years Experience",
        about_stat_corp: "Corporate Excellence",
        about_vision_title: "Vision",
        about_vision_desc: "To be the definitive voice of financial authority, transforming complex regulatory landscapes into strategic advantages for our elite clientele, ensuring sustained corporate success and legacy building.",
        about_mission_title: "Mission",
        about_mission_desc: "To deliver precision-driven tax and accounting solutions engineered on absolute trust, rigorous expertise, and an unwavering commitment to client prosperity, acting as the bedrock for their financial architecture.",

        // --- Services Page ---
        services_hero_title: "Expert Financial Services tailored for excellence.",
        services_hero_desc: "We provide precision-driven taxation, compliance, and accounting solutions for high-net-worth individuals and corporate entities, ensuring enduring financial health.",
        services_s1_section: "Taxation",
        services_s1_desc: "Comprehensive tax strategies designed to optimize your financial position while maintaining absolute compliance with current regulations.",
        services_s1_li1_title: "Individual & Corporate Tax",
        services_s1_li1_desc: "Accurate preparation and filing for Income Tax.",
        services_s1_li2_title: "Tax Planning",
        services_s1_li2_desc: "Proactive strategies to minimize liabilities.",
        services_s1_li3_title: "Tax Consultancy",
        services_s1_li3_desc: "Expert guidance on complex tax scenarios and disputes.",
        
        services_s2_section: "Compliance",
        services_s2_desc: "Rigorous adherence to statutory requirements, mitigating risk and ensuring operational peace of mind.",
        services_s2_li1_title: "RAMIS & IRD Online",
        services_s2_li1_desc: "TIN/VAT registration, online tax filing, and handling assessments.",
        services_s2_li2_title: "SVAT & Monthly VAT",
        services_s2_li2_desc: "Precise VAT, SSCL (2.5%), and Suspended VAT Credit Voucher calculations.",
        services_s2_li3_title: "ROC Corporate Secretarial",
        services_s2_li3_desc: "e-ROC filings, Annual Returns (Form 15), company registration, and share transfers.",

        services_s3_section: "Financial Reporting",
        services_s3_desc: "Modern financial reporting that provides clear visibility into your business performance.",
        services_s3_card1_title: "Digital Bookkeeping",
        services_s3_card1_desc: "Proficient in QuickBooks & Xero.",
        services_s3_card2_title: "Final Accounts",
        services_s3_card2_desc: "Statutory financial statements.",
        services_s3_card3_title: "Management Accounts",
        services_s3_card3_desc: "Actionable insights for strategic decision-making.",

        services_s4_section: "Personalized Support",
        services_s4_desc: "We believe in building enduring partnerships through dedicated, hands-on service.",
        services_s4_card_title: "Weekend Physical Site Visits",
        services_s4_card_desc: "Available upon request for deeper business context.",

        // --- Tax Updates Page ---
        tax_hero_tag: "INSIGHTS & REGULATION",
        tax_hero_title: "Tax Updates & <span class='text-secondary-fixed-dim'>Insights</span>",
        tax_hero_desc: "Stay informed with the latest regulatory changes, circulars, and strategic tax analyses from DMG Consultants and the Inland Revenue Department.",
        tax_ird_section_subtitle: "Official Resources",
        tax_ird_section_title: "Inland Revenue Department (IRD) Updates",
        tax_ird_section_desc: "Direct access to the latest notices, forms, and circulars from the official Sri Lankan tax authority.",
        tax_ird_card1_title: "Latest News & Notices",
        tax_ird_card1_desc: "Access real-time announcements regarding tax payment deadlines, new implementations (APIT, AIT, WHT), and other critical regulatory notices straight from the IRD portal.",
        tax_ird_card1_btn: "View More on IRD",
        tax_ird_card2_title: "Latest Content",
        tax_ird_card2_desc: "Download updated schedule files, verification tools, circulars to specific instructions, and templates directly from the official IRD repository.",
        tax_ird_card2_btn: "View More on IRD",
        tax_expert_section_subtitle: "Expert Analysis",
        tax_expert_section_title: "DMG Consultants Insights",
        tax_expert_art1_tag: "Taxation",
        tax_expert_art1_date: "October 15, 2024",
        tax_expert_art1_title: "Implications of the New VAT Amendments for Corporate Entities",
        tax_expert_art1_desc: "An executive summary of how the recent changes to Value Added Tax legislation will impact corporate cash flows in the upcoming fiscal quarter.",
        tax_expert_art2_tag: "Compliance",
        tax_expert_art2_date: "October 02, 2024",
        tax_expert_art2_title: "Navigating CA Sri Lanka's Updated Reporting Standards",
        tax_expert_art2_desc: "A breakdown of the critical adjustments required for annual financial reports to maintain absolute compliance with the revised national guidelines.",

        // --- Contact Page ---
        contact_hero_title: "Contact & Quotation",
        contact_hero_desc: "Engage with our experts for professional tax and accounting services tailored to your corporate needs.",
        contact_direct_title: "Direct Contact",
        contact_address_label: "Office Address",
        contact_address_val: "Ragama, Sri Lanka.",
        contact_phone_label: "Telephone",
        contact_email_label: "Email",
        contact_form_title: "Request a Quotation",
        contact_form_desc: "Please provide your details and requirements. Our senior consultants will respond within 24 hours.",
        contact_form_name_lbl: "Full Name",
        contact_form_name_ph: "John Doe",
        contact_form_company_lbl: "Company Name",
        contact_form_company_ph: "Acme Corp",
        contact_form_email_lbl: "Corporate Email",
        contact_form_email_ph: "john@acme.com",
        contact_form_phone_lbl: "Contact Number",
        contact_form_phone_ph: "+94 77 ...",
        contact_form_service_lbl: "Service Required",
        contact_form_service_default: "Select a service category",
        contact_form_service_opt1: "Tax Advisory & Compliance",
        contact_form_service_opt2: "Corporate Auditing",
        contact_form_service_opt3: "Professional Bookkeeping",
        contact_form_service_opt4: "Financial Consulting",
        contact_form_msg_lbl: "Project Details",
        contact_form_msg_ph: "Please describe your requirements in detail...",
        contact_form_submit_btn: "Submit Request",

        // --- Shared Footer Extra ---
        footer_company_name: "DMG Consultants",
        footer_tagline: "Professional Tax & Accounting Services. Ragama, Sri Lanka.",
        footer_nav_header: "Navigation",
        footer_legal_header: "Legal"
    },
    si: {
        // --- Shared Header & Footer ---
        nav_home: "මුල් පිටුව",
        nav_services: "සේවාවන්",
        nav_about: "අප ගැන",
        nav_tax_updates: "බදු යාවත්කාලීන",
        nav_contact: "සම්බන්ධතා",
        nav_btn_quote: "මිල ගණන් කැඳවීමක්",
        footer_desc: "වෘත්තීය බදු සහ ගිණුම්කරණ සේවා. රාගම, ශ්‍රී ලංකාව.",
        footer_nav_title: "පිටු සැරිසරන්න",
        footer_res_title: "මූලාශ්‍ර",
        footer_legal_title: "නීතිමය",
        footer_privacy: "පුද්ගලිකත්ව ප්‍රතිපත්තිය",
        footer_terms: "සේවා කොන්දේසි",
        footer_copyright: "© 2026 DMG Consultants. වෘත්තීය බදු සහ ගිණුම්කරණ සේවා. රාගම, ශ්‍රී ලංකාව.",

        // --- Index (Home Page) ---
        hero_tag: "CBA සහ AAT සහතිකලත්",
        hero_title: "ඔබේ ව්‍යාපාරයේ වර්ධනය උදෙසාම සැකසූ <br><span class='text-secondary-fixed-dim'>උපායමාර්ගික බදු සහ ගිණුම්කරණ විසඳුම්.</span>",
        hero_desc: "CA ශ්‍රී ලංකා වෘත්තිකයන්ගේ වසර 20කට අධික වෘත්තීය විශිෂ්ටත්වය. ඉහළ වත්කම් සහිත සහ ආයතනික සේවාදායකයින් සඳහා නිවැරදි සහ වගකීම් සහගත මූල්‍ය පැහැදිලිභාවයක් අප ලබා දෙන්නෙමු.",
        hero_btn_explore: "සේවාවන් ගවේෂණය කරන්න",
        
        about_tag: "නිරවද්‍යතාවයේ උරුමය",
        about_title: "දශක ගණනාවක ආයතනික අත්දැකීම් මත ගොඩනැඟුණු විශ්වාසය",
        about_badge_years: "15+",
        about_badge_label: "වසරක පළපුරුද්ද",
        about_badge_desc: "සංකීර්ණ මූල්‍ය ක්ෂේත්‍රයන් මෙහෙයවමින් සමූහ ගණකාධිකාරීවරයෙකු (Group Accountant) ලෙස ලැබූ ජ්‍යෙෂ්ඨ ආයතනික ප්‍රවීණත්වය.",
        about_p1: "DMG Consultants හිදී, අප සාමාන්‍ය බදු නීති අනුකූලතාවයෙන් ඔබ්බට යන්නෙමු. ඔබේ වත්කම් ආරක්ෂා කිරීමට සහ වර්ධනය කිරීමට අපි අපගේ ගැඹුරු ආයතනික අත්දැකීම් උපයෝගී කර ගනිමු.",
        about_p2: "අපගේ නායකත්වය සතු සමූහ ගණකාධිකාරීවරයෙකු ලෙස වසර 15කට අධික සක්‍රීය අත්දැකීම්, සෑම උපදෙසක්ම ප්‍රායෝගික ආයතනික සාර්ථකත්වය මත පදනම් වන බව සහතික කරයි. ඔබේ ව්‍යාපාරයේ මූල්‍ය සැලසුම ඉහළම නිරවද්‍යතාවයකින් යුතුව අපි හසුරුවන්නෙමු.",
        about_li1: "විස්තීර්ණ ආයතනික බදු සැලසුම්කරණය.",
        about_li2: "ආරම්භයේ සිට අවසානය දක්වා ගිණුම්කරණය සහ මූල්‍ය වාර්තාකරණය.",
        about_li3: "ජාතික මූල්‍ය හා බදු නීති රීතිවලට පූර්ණ අනුකූලතාවය.",

        services_tag: "අපගේ ප්‍රධාන සේවාවන්",
        services_title: "නිරවද්‍යතාවයෙන් යුතුව සැලසුම් කළ සේවාවන්",
        services_card1_title: "ආයතනික බදුකරණය",
        services_card1_desc: "ඉහළ වත්කම් ඇති සමාගම් සහ වර්ධනය වන ව්‍යාපාර සඳහා උපායමාර්ගික බදු සැලසුම්කරණය සහ නීත්‍යානුකූල බදු අවම කිරීමේ ක්‍රමෝපායන්.",
        services_card2_title: "ව්‍යවස්ථාපිත අනුකූලතාවය",
        services_card2_desc: "CA ශ්‍රී ලංකා ප්‍රමිතීන් සහ ජාතික නියාමන රාමු (IRD සහ ROC) පූර්ණ ලෙස අනුගමනය කරමින් ඔබේ ව්‍යාපාරය ඕනෑම නීතිමය ගැටලුවකින් නිදහස් කිරීම.",
        services_card3_title: "විධායක ගිණුම්කරණය",
        services_card3_desc: "ව්‍යාපාරයේ ඉහළ කළමනාකාරීත්වයට ක්ෂණික තීරණ ගැනීම සඳහා උපකාරී වන පරිදි සකසන ලද උසස් මට්ටමේ මූල්‍ය වාර්තාකරණය සහ ලෙජර් කළමනාකරණය.",
        services_discover: "වැඩිදුර විස්තර",

        updates_tag: "අවබෝධය සහ විශ්ලේෂණය",
        updates_title: "නවතම බදු යාවත්කාලීන කිරීම්",
        updates_view_all: "සියලුම යාවත්කාලීන බැලීමට",
        updates_art1_tag: "බදුකරණය",
        updates_art1_date: "2024 ඔක්තෝබර් 15",
        updates_art1_title: "ආයතනික සමාගම් සඳහා නව වැට් (VAT) සංශෝධනවල බලපෑම",
        updates_art1_desc: "මෑතකදී හඳුන්වා දුන් වැට් බදු (Value Added Tax) නීතිමය වෙනස්කම් ඉදිරි මූල්‍ය කාර්තුවේදී ආයතනික මුදල් ප්‍රවාහයන්ට බලපාන්නේ කෙසේද යන්න පිළිබඳ සාරාංශයක්.",
        updates_art2_tag: "අනුකූලතාවය",
        updates_art2_date: "2024 ඔක්තෝබර් 02",
        updates_art2_title: "CA ශ්‍රී ලංකා ආයතනයේ නවතම මූල්‍ය වාර්තාකරණ ප්‍රමිතීන් තේරුම් ගැනීම",
        updates_art2_desc: "නවීකරණය කරන ලද ජාතික මූල්‍ය මාර්ගෝපදේශයන්ට පූර්ණ ලෙස අනුකූල වීම සඳහා වාර්ෂික මූල්‍ය වාර්තාවල සිදු කළ යුතු වැදගත් සංශෝධන පිළිබඳ විශ්ලේෂණයක්.",

        contact_tag: "අප සමඟ සම්බන්ධ වන්න",
        contact_title: "වෘත්තීය උපදේශනයක් වෙන් කරවා ගන්න.",
        contact_desc: "ඔබේ ආයතනික හෝ පුද්ගලික මූල්‍ය අවශ්‍යතාවයන්ට ගැලපෙන පරිදි සකස් කළ විශේෂ මූල්‍ය උපායමාර්ගයක් නිර්මාණය කර ගැනීමට DMG Consultants හා සම්බන්ධ වන්න.",
        contact_office_title: "ප්‍රධාන කාර්යාලය",
        contact_office_desc: "රාගම, ශ්‍රී ලංකාව",
        contact_comm_title: "සෘජු සන්නිවේදනය",
        contact_comm_desc: "dmgtaxconsultants@gmail.com",
        contact_phone_title: "උපදේශන ඇමතුම්",
        contact_phone_desc: "0782337999",

        form_title: "මිල ගණන් කැඳවීමක්",
        form_subtitle: "කරුණාකර ඔබේ තොරතුරු සහ අවශ්‍යතා ඇතුළත් කරන්න. අපගේ ජ්‍යෙෂ්ඨ උපදේශකයින් පැය 24ක් ඇතුළත ප්‍රතිචාර දක්වනු ඇත.",
        form_first_name: "මුල් නම",
        form_first_name_ph: "ඔබේ මුල් නම ඇතුළත් කරන්න",
        form_last_name: "වාසගම",
        form_last_name_ph: "ඔබේ වාසගම ඇතුළත් කරන්න",
        form_full_name: "සම්පූර්ණ නම",
        form_full_name_ph: "ජෝන් ඩෝ",
        form_company: "සමාගමේ නම",
        form_company_ph: "සමාගමේ නම මෙහි ලියන්න",
        form_email: "ව්‍යාපාරික විද්‍යුත් තැපෑල (Email)",
        form_email_ph: "name@company.com",
        form_phone: "දුරකථන අංකය",
        form_phone_ph: "+94 77 ...",
        form_service: "අපේක්ෂිත සේවාව",
        form_service_ph: "මූලික සේවාවක් තෝරන්න",
        form_service_tax: "ආයතනික බදුකරණය",
        form_service_compliance: "ව්‍යවස්ථාපිත අනුකූලතාවය",
        form_service_accounting: "විධායක ගිණුම්කරණය",
        form_service_other: "වෙනත් විමසීම්",
        form_msg: "ඔබේ අවශ්‍යතාවය පිළිබඳ කෙටි විස්තරයක්",
        form_msg_ph: "ඔබේ මූල්‍ය අවශ්‍යතාවයන් පිළිබඳ විස්තර මෙහි ඇතුළත් කරන්න...",
        form_btn_submit: "ඉල්ලීම යොමු කරන්න",

        // --- About Page ---
        about_hero_tag: "අපගේ උරුමය",
        about_hero_title: "නිරවද්‍යතාවය සහ පළපුරුද්ද මත ගොඩනැඟුණු විශ්වාසය",
        about_hero_desc: "වසර 20කට අධික කාලයක් පුරා DMG Consultants ආයතනික මූල්‍ය සාර්ථකත්වයේ නිහඬ සැලසුම්කරුවා වී ඇති අතර බදු සහ ගිණුම්කරණය පිළිබඳ අසමසම ප්‍රවීණත්වයක් ලබා දෙයි.",
        about_lead_title: "විශිෂ්ට නායකත්වය",
        about_lead_desc: "දශක ගණනාවක උසස් ආයතනික මූල්‍ය කළමනාකරණ අත්දැකීම්වලින් මඟ පෙන්වනු ලබයි.",
        about_cba_badge: "CBA (CA ශ්‍රී ලංකා)",
        about_aat_badge: "AAT සාමාජික",
        about_profile_title: "සමූහ ගණකාධිකාරීවරයාගේ පැතිකඩ",
        about_profile_p1: "සමූහ ගණකාධිකාරීවරයෙකු (Group Accountant) ලෙස වසර 20කට වැඩි සක්‍රීය සේවා කාලයක් ඇති අපගේ නිර්මාතෘ, ප්‍රමුඛ පෙළේ සමාගම් සඳහා සංකීර්ණ මූල්‍ය ව්‍යුහයන් සාර්ථකව මෙහෙයවා ඇත. මෙම දීර්ඝ පළපුරුද්ද ආයතනික මූල්‍ය, උපායමාර්ගික බදු සැලසුම්කරණය සහ දැඩි නීති අනුකූලතාව පිළිබඳ ගැඹුරු අවබෝධයක් සහතික කරයි.",
        about_profile_p2: "CA ශ්‍රී ලංකා (CBA) සහ AAT හි ගෞරවනීය සාමාජිකත්වය දරන අපගේ නායකත්වය වෘත්තීය ගිණුම්කරණ ප්‍රමිතීන්ගේ ඉහළම තලයන් නියෝජනය කරන අතර, සෑම සේවාදායකයෙකුටම නිවැරදි සහ වගකීම් සහගත මූල්‍ය මඟ පෙන්වීමක් සහතික කරයි.",
        about_stat_exp: "වසරක පළපුරුද්ද",
        about_stat_corp: "ආයතනික විශිෂ්ටත්වය",
        about_vision_title: "දැක්ම (Vision)",
        about_vision_desc: "සංකීර්ණ නියාමන ක්ෂේත්‍ර අපගේ සේවාදායකයින්ට වාසිදායක ලෙස පරිවර්තනය කරමින්, තිරසාර ආයතනික සාර්ථකත්වයක් සහ දිගුකාලීන ව්‍යාපාරික වටිනාකමක් සහතික කරන මූල්‍ය ක්ෂේත්‍රයේ ප්‍රමුඛතම සහ විශ්වාසදායකම හඬ බවට පත්වීම.",
        about_mission_title: "මෙහෙවර (Mission)",
        about_mission_desc: "පූර්ණ විශ්වාසය, දැඩි ප්‍රවීණත්වය සහ සේවාදායක සමෘද්ධිය වෙනුවෙන් කැපවීම මත පදනම්ව, ඔවුන්ගේ ව්‍යාපාරයේ මූල්‍ය ව්‍යුහය ශක්තිමත් කරන නිරවද්‍යතාවයෙන් යුත් බදු සහ ගිණුම්කරණ විසඳුම් සැපයීම.",

        // --- Services Page ---
        services_hero_title: "ඔබේ ව්‍යාපාරික සාර්ථකත්වය සඳහා සැකසූ සුවිශේෂී මූල්‍ය සේවාවන්.",
        services_hero_desc: "ඉහළ වත්කම් සහිත පුද්ගලයින් සහ ආයතනික සමාගම් සඳහා කල්පවත්නා මූල්‍ය සෞඛ්‍යයක් සහතික කරන, නිරවද්‍ය බදුකරණ, ව්‍යවස්ථාපිත අනුකූලතා සහ ගිණුම්කරණ විසඳුම් අපි සපයන්නෙමු.",
        services_s1_section: "බදුකරණය",
        services_s1_desc: "පවතින නීතිරීතිවලට අනුකූල වෙමින් ඔබේ ව්‍යාපාරයේ මූල්‍ය ස්ථාවරත්වය උපරිම කිරීමට සකස් කරන ලද පුළුල් බදු උපායමාර්ග.",
        services_s1_li1_title: "පුද්ගලික සහ ආයතනික බදු",
        services_s1_li1_desc: "ආදායම් බදු (Income Tax) නිවැරදිව ගණනය කිරීම සහ ගොනු කිරීම.",
        services_s1_li2_title: "බදු සැලසුම්කරණය",
        services_s1_li2_desc: "බදු වගකීම් නීත්‍යානුකූලව අවම කිරීම සඳහා පූර්ව සූදානම් ක්‍රමෝපායන්.",
        services_s1_li3_title: "බදු උපදේශනය",
        services_s1_li3_desc: "සංකීර්ණ බදු ගැටලු සහ ආරවුල් සඳහා වෘත්තීයමය සහ කඩිනම් මඟපෙන්වීම්.",
        
        services_s2_section: "Statutory අනුකූලතාවය",
        services_s2_desc: "නීතිමය අවදානම් අවම කරමින් සහ මෙහෙයුම් කටයුතු බාධාවකින් තොරව පවත්වාගෙන යාම සඳහා ව්‍යවස්ථාපිත අවශ්‍යතා දැඩි ලෙස අනුගමනය කිරීම.",
        services_s2_li1_title: "RAMIS සහ IRD ඔන්ලයින්",
        services_s2_li1_desc: "TIN/VAT ලියාපදිංචිය, අන්තර්ජාලය හරහා බදු වාර්තා ගොනු කිරීම සහ IRD තක්සේරු කිරීම් හැසිරවීම.",
        services_s2_li2_title: "SVAT සහ මාසික VAT බදු",
        services_s2_li2_desc: "නිරවද්‍ය වැට් (VAT), SSCL (2.5%) සහ අත්හිටුවන ලද වැට් (SVAT) ණය වවුචර ගණනය කිරීම්.",
        services_s2_li3_title: "ROC සමාගම් ලේකම් සේවා",
        services_s2_li3_desc: "e-ROC ගොනු කිරීම්, වාර්ෂික වාර්තා (පෝරම 15), සමාගම් ලියාපදිංචිය සහ කොටස් පැවරීම්.",

        services_s3_section: "මූල්‍ය වාර්තාකරණය",
        services_s3_desc: "ඔබේ ව්‍යාපාරයේ ක්‍රියාකාරිත්වය පැහැදිලිව අවබෝධ කර ගැනීමට උපකාරී වන නවීන මූල්‍ය වාර්තාකරණය.",
        services_s3_card1_title: "ඩිජිටල් පොත් තැබීම",
        services_s3_card1_desc: "QuickBooks සහ Xero මෘදුකාංග මඟින් ගිණුම් කටයුතු කාර්යක්ෂමව පවත්වා ගැනීම.",
        services_s3_card2_title: "වාර්ෂික අවසන් ගිණුම්",
        services_s3_card2_desc: "නීත්‍යානුකූල මූල්‍ය ප්‍රකාශන (Financial Statements) සකස් කිරීම.",
        services_s3_card3_title: "කළමනාකරණ ගිණුම්",
        services_s3_card3_desc: "ව්‍යාපාරික තීරණ ගැනීම සඳහා උපකාරී වන ප්‍රායෝගික කළමනාකරණ තොරතුරු.",

        services_s4_section: "සුවිශේෂී සහයෝගය",
        services_s4_desc: "කැපවූ සහ සමීප සේවාවක් මඟින් ඔබේ ව්‍යාපාරය සමඟ දිගුකාලීන හවුල්කාරිත්වයක් ගොඩනැඟීම අපගේ අරමුණයි.",
        services_s4_card_title: "සති අන්තයේ ව්‍යාපාරික ස්ථාන වෙත පැමිණීම",
        services_s4_card_desc: "ව්‍යාපාරික කටයුතු ගැඹුරින් අවබෝධ කර ගැනීම සඳහා ඉල්ලීම පරිදි සති අන්තයේ සේවා ස්ථානයට පැමිණ උපදෙස් දීම.",

        // --- Tax Updates Page ---
        tax_hero_tag: "නියාමන සහ බදු තොරතුරු",
        tax_hero_title: "බදු යාවත්කාලීන සහ <span class='text-secondary-fixed-dim'>විශ්ලේෂණ</span>",
        tax_hero_desc: "දේශීය ආදායම් දෙපාර්තමේන්තුවේ (IRD) සහ DMG Consultants හි නවතම නීතිමය වෙනස්කම්, චක්‍රලේඛ සහ උපායමාර්ගික බදු විශ්ලේෂණ පිළිබඳව දැනුවත් වන්න.",
        tax_ird_section_subtitle: "නිල මූලාශ්‍ර",
        tax_ird_section_title: "දේශීය ආදායම් දෙපාර්තමේන්තුවේ (IRD) නවතම නිවේදන",
        tax_ird_section_desc: "ශ්‍රී ලංකාවේ නිල බදු අධිකාරියෙන් නිකුත් කරන ලද නවතම චක්‍රලේඛ, පෝරම සහ නිවේදන වෙත සෘජුවම ප්‍රවේශ වන්න.",
        tax_ird_card1_title: "නවතම ප්‍රවෘත්ති සහ නිවේදන",
        tax_ird_card1_desc: "බදු ගෙවීමේ නියමිත දින, අලුතින් හඳුන්වා දුන් බදු ක්‍රම (APIT, AIT, WHT) සහ අනෙකුත් වැදගත් නියාමන තොරතුරු IRD නිල වෙබ් අඩවිය හරහා සෘජුවම ලබා ගන්න.",
        tax_ird_card1_btn: "IRD වෙබ් අඩවියෙන් බලන්න",
        tax_ird_card2_title: "නවතම බදු ලේඛන",
        tax_ird_card2_desc: "යාවත්කාලීන කරන ලද බදු ගොනු, බදු සත්‍යාපන මෙවලම්, විශේෂ උපදෙස් පත්‍රිකා සහ ආකෘති පත්‍ර නිල IRD දත්ත ගබඩාවෙන් සෘජුවම බාගත කරගන්න.",
        tax_ird_card2_btn: "IRD වෙබ් අඩවියෙන් බලන්න",
        tax_expert_section_subtitle: "වෘත්තීය විශ්ලේෂණ",
        tax_expert_section_title: "DMG Consultants විශේෂ විශ්ලේෂණ",
        tax_expert_art1_tag: "බදුකරණය",
        tax_expert_art1_date: "2024 ඔක්තෝබර් 15",
        tax_expert_art1_title: "ආයතනික සමාගම් සඳහා නව වැට් (VAT) සංශෝධනවල බලපෑම",
        tax_expert_art1_desc: "මෑතකදී හඳුන්වා දුන් වැට් බදු (Value Added Tax) නීතිමය වෙනස්කම් ඉදිරි මූල්‍ය කාර්තුවේදී ආයතනික මුදල් ප්‍රවාහයන්ට බලපාන්නේ කෙසේද යන්න පිළිබඳ සාරාංශයක්.",
        tax_expert_art2_tag: "අනුකූලතාවය",
        tax_expert_art2_date: "2024 ඔක්තෝබර් 02",
        tax_expert_art2_title: "CA ශ්‍රී ලංකා ආයතනයේ නවතම මූල්‍ය වාර්තාකරණ ප්‍රමිතීන් තේරුම් ගැනීම",
        tax_expert_art2_desc: "නවීකරණය කරන ලද ජාතික මූල්‍ය මාර්ගෝපදේශයන්ට පූර්ණ ලෙස අනුකූල වීම සඳහා වාර්ෂික මූල්‍ය වාර්තාවල සිදු කළ යුතු වැදගත් සංශෝධන පිළිබඳ විශ්ලේෂණයක්.",

        // --- Contact Page ---
        contact_hero_title: "සම්බන්ධතා සහ මිල ගණන්",
        contact_hero_desc: "ඔබේ ව්‍යාපාරික අවශ්‍යතාවලට ගැලපෙන වෘත්තීය බදු සහ ගිණුම්කරණ සේවාවන් ලබා ගැනීමට අපගේ විශේෂඥයින් හා සම්බන්ධ වන්න.",
        contact_direct_title: "සෘජුව සම්බන්ධ වන්න",
        contact_address_label: "කාර්යාල ලිපිනය",
        contact_address_val: "රාගම, ශ්‍රී ලංකාව.",
        contact_phone_label: "දුරකථන අංකය",
        contact_email_label: "විද්‍යුත් තැපෑල",
        contact_form_title: "මිල ගණන් කැඳවීමක්",
        contact_form_desc: "කරුණාකර ඔබේ තොරතුරු සහ අවශ්‍යතා ඇතුළත් කරන්න. අපගේ ජ්‍යෙෂ්ඨ උපදේශකයින් පැය 24ක් ඇතුළත ප්‍රතිචාර දක්වනු ඇත.",
        contact_form_name_lbl: "සම්පූර්ණ නම",
        contact_form_name_ph: "ජෝන් ඩෝ",
        contact_form_company_lbl: "සමාගමේ නම",
        contact_form_company_ph: "සමාගමේ නම මෙහි ලියන්න",
        contact_form_email_lbl: "ව්‍යාපාරික විද්‍යුත් තැපෑල (Email)",
        contact_form_email_ph: "name@company.com",
        contact_form_phone_lbl: "දුරකථන අංකය",
        contact_form_phone_ph: "+94 77 ...",
        contact_form_service_lbl: "අපේක්ෂිත සේවාව",
        contact_form_service_default: "සේවා ගණය තෝරන්න",
        contact_form_service_opt1: "බදු උපදේශනය සහ අනුකූලතාවය",
        contact_form_service_opt2: "ආයතනික විගණනය (Auditing)",
        contact_form_service_opt3: "පොත් තැබීමේ සේවාවන් (Bookkeeping)",
        contact_form_service_opt4: "මූල්‍ය උපදේශනය",
        contact_form_msg_lbl: "ඔබේ අවශ්‍යතාවය පිළිබඳ කෙටි විස්තරයක්",
        contact_form_msg_ph: "ඔබේ මූල්‍ය අවශ්‍යතාවයන් පිළිබඳ විස්තර මෙහි ඇතුළත් කරන්න...",
        contact_form_submit_btn: "ඉල්ලීම යොමු කරන්න",

        // --- Shared Footer Extra ---
        footer_company_name: "DMG Consultants",
        footer_tagline: "වෘත්තීය බදු සහ ගිණුම්කරණ සේවා. රාගම, ශ්‍රී ලංකාව.",
        footer_nav_header: "පිටු සැරිසරන්න",
        footer_legal_header: "නීතිමය"
    }
};

document.addEventListener("DOMContentLoaded", () => {
    // 1. CSS Styles injection for drawer and premium language selector transition
    const style = document.createElement("style");
    style.textContent = `
        .mobile-drawer {
            transform: translateX(100%);
            transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .mobile-drawer.open {
            transform: translateX(0);
        }
        .drawer-overlay {
            opacity: 0;
            transition: opacity 0.3s ease;
            pointer-events: none;
        }
        .drawer-overlay.open {
            opacity: 0.6;
            pointer-events: auto;
        }
        .lang-active {
            background-color: #00113a !important; /* primary */
            color: #ffffff !important;
            box-shadow: 0 2px 8px rgba(0, 17, 58, 0.2);
        }
        [data-key] {
            transition: opacity 0.15s ease-in-out;
        }
        .text-fade-out {
            opacity: 0;
        }
    `;
    document.head.appendChild(style);

    // 2. State & Persistence Setup
    let currentLang = localStorage.getItem("dmg_lang") || "en";

    // 3. Dynamic Desktop Toggler & Mobile Drawer Injection
    setupNavigationInteractions();

    // 4. Set Initial Language
    setLanguage(currentLang, false);
});

// Setup Desktop switch and inject beautiful Drawer & Toggles
function setupNavigationInteractions() {
    // --- 1. Injected Mobile Drawer HTML ---
    const drawerOverlay = document.createElement("div");
    drawerOverlay.className = "drawer-overlay fixed inset-0 bg-[#00113a] backdrop-blur-sm z-50";
    
    const drawer = document.createElement("div");
    drawer.className = "mobile-drawer fixed top-0 right-0 h-full w-[310px] bg-surface border-l border-outline-variant shadow-2xl z-[100] p-6 flex flex-col justify-between";
    
    drawer.innerHTML = `
        <div class="flex flex-col gap-8">
            <div class="flex justify-between items-center pb-4 border-b border-outline-variant">
                <span class="font-headline-sm text-headline-sm font-bold text-primary">DMG Menu</span>
                <button id="drawer-close" class="text-primary hover:text-secondary p-1">
                    <span class="material-symbols-outlined text-3xl">close</span>
                </button>
            </div>
            
            <!-- Language Pill in Mobile Drawer -->
            <div class="flex flex-col gap-2">
                <span class="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Select Language / භාෂාව</span>
                <div class="flex items-center bg-surface-container border border-outline-variant rounded-full p-1 w-full max-w-[200px]">
                    <button data-lang-switch="en" class="flex-1 py-1.5 text-xs font-bold rounded-full transition-all duration-300">EN</button>
                    <button data-lang-switch="si" class="flex-1 py-1.5 text-xs font-bold rounded-full transition-all duration-300">සිංහල</button>
                </div>
            </div>

            <!-- Navigation Links -->
            <nav class="flex flex-col gap-5 text-lg font-semibold">
                <a href="index.html" class="flex items-center gap-3 text-on-surface-variant hover:text-primary transition-colors py-2 border-b border-outline-variant/30" data-key="nav_home">Home</a>
                <a href="services.html" class="flex items-center gap-3 text-on-surface-variant hover:text-primary transition-colors py-2 border-b border-outline-variant/30" data-key="nav_services">Services</a>
                <a href="about.html" class="flex items-center gap-3 text-on-surface-variant hover:text-primary transition-colors py-2 border-b border-outline-variant/30" data-key="nav_about">About</a>
                <a href="tax-updates.html" class="flex items-center gap-3 text-on-surface-variant hover:text-primary transition-colors py-2 border-b border-outline-variant/30" data-key="nav_tax_updates">Tax Updates</a>
                <a href="contact.html" class="flex items-center gap-3 text-on-surface-variant hover:text-primary transition-colors py-2" data-key="nav_contact">Contact</a>
            </nav>
        </div>

        <div class="pt-6 border-t border-outline-variant">
            <a href="contact.html" class="w-full text-center py-4 bg-primary text-on-primary font-label-md text-label-md uppercase tracking-wider rounded block hover:bg-primary-container transition-colors shadow-sm" data-key="nav_btn_quote">
                Request a Quotation
            </a>
        </div>
    `;

    document.body.appendChild(drawerOverlay);
    document.body.appendChild(drawer);

    // --- 2. Injected Desktop Language Selector in Navbar ---
    // Locate the "Request a Quotation" button using its data-key
    const quoteBtn = document.querySelector('[data-key="nav_btn_quote"]');
    if (quoteBtn) {
        // Find header or nav
        const header = quoteBtn.closest('header') || quoteBtn.closest('nav');
        if (header && !header.querySelector('.lang-pill-desktop')) {
            // Find outermost desktop container for quoteBtn if it's wrapped
            const desktopTarget = quoteBtn.closest('.hidden.md\\:block') || quoteBtn;
            
            const desktopToggle = document.createElement("div");
            desktopToggle.className = "lang-pill-desktop hidden md:flex items-center bg-surface-container-high dark:bg-surface-container border border-outline-variant rounded-full p-0.5 ml-4 select-none transition-all duration-300 shadow-sm hover:shadow-md";
            desktopToggle.innerHTML = `
                <button data-lang-switch="en" class="px-3.5 py-1 text-xs font-bold rounded-full transition-all duration-300 text-on-surface-variant hover:text-primary">EN</button>
                <button data-lang-switch="si" class="px-3.5 py-1 text-xs font-bold rounded-full transition-all duration-300 text-on-surface-variant hover:text-primary">සිංහල</button>
            `;
            // Insert immediately after the desktop quotation button/wrapper
            desktopTarget.parentNode.insertBefore(desktopToggle, desktopTarget.nextSibling);
        }
    }

    // --- 3. Injected Mobile Language Selector in Navbar ---
    const headerEl = document.querySelector('header, nav');
    if (headerEl && !headerEl.querySelector('.lang-pill-mobile')) {
        const mobileMenuBtn = headerEl.querySelector('button.md\\:hidden') || 
                              Array.from(headerEl.querySelectorAll('button')).find(btn => 
                                  btn.querySelector('.material-symbols-outlined')?.textContent.trim() === 'menu' || 
                                  btn.classList.contains('md:hidden')
                              );

        if (mobileMenuBtn) {
            const mobileToggle = document.createElement("div");
            mobileToggle.className = "lang-pill-mobile flex md:hidden items-center bg-surface-container-high dark:bg-surface-container border border-outline-variant rounded-full p-0.5 mr-2 select-none transition-all duration-300";
            mobileToggle.innerHTML = `
                <button data-lang-switch="en" class="px-2.5 py-0.5 text-[10px] font-bold rounded-full transition-all duration-300 text-on-surface-variant hover:text-primary">EN</button>
                <button data-lang-switch="si" class="px-2.5 py-0.5 text-[10px] font-bold rounded-full transition-all duration-300 text-on-surface-variant hover:text-primary">සිංහල</button>
            `;
            // Insert immediately before the hamburger menu button
            mobileMenuBtn.parentNode.insertBefore(mobileToggle, mobileMenuBtn);
        }
    }

    // --- 4. Click Event Hooks for Language Toggle Buttons ---
    const allLangButtons = document.querySelectorAll('[data-lang-switch]');
    allLangButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            const lang = btn.getAttribute("data-lang-switch");
            setLanguage(lang, true);
        });
    });

    // --- 5. Hamburger / Close Drawer Event Hooks ---
    const mobileMenuBtn = document.querySelector('button.md\\:hidden') || 
                          Array.from(document.querySelectorAll('button')).find(btn => 
                              btn.querySelector('.material-symbols-outlined')?.textContent.trim() === 'menu' || 
                              btn.classList.contains('md:hidden')
                          );

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener("click", (e) => {
            e.preventDefault();
            e.stopPropagation();
            drawer.classList.add("open");
            drawerOverlay.classList.add("open");
        });
    }

    const closeBtn = document.getElementById("drawer-close");
    if (closeBtn) {
        closeBtn.addEventListener("click", () => {
            drawer.classList.remove("open");
            drawerOverlay.classList.remove("open");
        });
    }

    // Close on overlay click
    drawerOverlay.addEventListener("click", () => {
        drawer.classList.remove("open");
        drawerOverlay.classList.remove("open");
    });
}

// Global function to trigger bilingual swap
function setLanguage(lang, smoothTransition = true) {
    if (!translations[lang]) return;
    
    // Save selection
    localStorage.setItem("dmg_lang", lang);
    document.documentElement.lang = lang;

    // Update active button state styling across all injected pills
    const allSwitches = document.querySelectorAll('[data-lang-switch]');
    allSwitches.forEach(btn => {
        const switchLang = btn.getAttribute("data-lang-switch");
        if (switchLang === lang) {
            btn.className = btn.className.replace(/text-on-surface-variant|hover:text-primary/g, '').trim();
            btn.classList.add("lang-active");
        } else {
            btn.classList.remove("lang-active");
            if (!btn.className.includes("text-on-surface-variant")) {
                btn.className += " text-on-surface-variant hover:text-primary";
            }
        }
    });

    const translatableElements = document.querySelectorAll("[data-key]");

    // Optional subtle fade-out transition for high-end micro-animation feel
    if (smoothTransition) {
        translatableElements.forEach(el => el.classList.add("text-fade-out"));
        
        setTimeout(() => {
            applyDOMTranslations(lang, translatableElements);
            translatableElements.forEach(el => el.classList.remove("text-fade-out"));
        }, 150);
    } else {
        applyDOMTranslations(lang, translatableElements);
    }
}

// Walk translatable items and substitute text/attributes
function applyDOMTranslations(lang, elements) {
    elements.forEach(el => {
        const key = el.getAttribute("data-key");
        const val = translations[lang][key];
        
        if (!val) return;

        // 1. If form input/textarea element, translate placeholder
        if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
            el.setAttribute("placeholder", val);
        }
        // 2. Handle select options
        else if (el.tagName === "OPTION") {
            el.textContent = val;
        }
        // 3. Normal elements
        else {
            el.innerHTML = val;
        }
    });
}
