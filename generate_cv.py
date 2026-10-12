from reportlab.lib import colors
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, KeepTogether

output = 'public/cv.pdf'
teal = colors.HexColor('#087f78')
dark = colors.HexColor('#17212b')
muted = colors.HexColor('#52616b')
line = colors.HexColor('#c9e4df')

styles = getSampleStyleSheet()
name_style = ParagraphStyle('Name', parent=styles['Title'], fontName='Helvetica-Bold', fontSize=24, leading=27, textColor=dark, spaceAfter=2)
role_style = ParagraphStyle('Role', parent=styles['Normal'], fontName='Helvetica-Bold', fontSize=11, leading=13, textColor=teal, spaceAfter=4)
contact_style = ParagraphStyle('Contact', parent=styles['Normal'], fontSize=8.2, leading=10, textColor=muted)
section_style = ParagraphStyle('Section', parent=styles['Heading2'], fontName='Helvetica-Bold', fontSize=10.5, leading=12, textColor=teal, spaceBefore=7, spaceAfter=4, uppercase=True)
body_style = ParagraphStyle('Body', parent=styles['BodyText'], fontSize=8.7, leading=11.5, textColor=dark, spaceAfter=3)
small_style = ParagraphStyle('Small', parent=body_style, fontSize=8.2, leading=10.2)
entry_style = ParagraphStyle('Entry', parent=body_style, fontName='Helvetica-Bold', spaceAfter=1)
meta_style = ParagraphStyle('Meta', parent=body_style, fontSize=8, textColor=muted)
footer_style = ParagraphStyle('Footer', parent=body_style, fontSize=7.5, textColor=muted)

story = [
    Paragraph('Muhammad Haider', name_style),
    Paragraph('Full-Stack &amp; AI Engineer', role_style),
    Paragraph('muhhaider906@gmail.com &nbsp;&nbsp;|&nbsp;&nbsp; github.com/Haiderlikecodes &nbsp;&nbsp;|&nbsp;&nbsp; linkedin.com/in/muhammad-haider-697802290', contact_style),
    Spacer(1, 4),
    Paragraph('PROFILE', section_style),
    Paragraph('Full-Stack and AI-focused software engineer with 4+ years of experience building modern web applications, robust REST APIs, and intelligent chatbot workflows using retrieval-augmented generation and fine-tuned models. Experienced with Next.js, React, Django REST Framework, Python, ChromaDB, and application security testing.', body_style),
    Paragraph('EXPERIENCE', section_style),
    Paragraph('Full-Stack &amp; AI Engineer <font color="#52616b" size="8">| Software Development Company | 4+ years</font>', entry_style),
    Paragraph('&bull; Built full-stack web applications with Next.js and React frontends connected to Django REST APIs.<br/>&bull; Designed intelligent chatbot workflows using RAG, fine-tuned language models, and ChromaDB for context-aware responses.<br/>&bull; Developed responsive UI components and integrated streaming chat experiences.', small_style),
    Spacer(1, 2),
    Paragraph('Junior Pentester <font color="#52616b" size="8">| Zeroxinnovation | 2024 - 2026</font>', entry_style),
    Paragraph('&bull; Conducted web application, network, and API penetration testing aligned with OWASP Top 10 and NIST practices.<br/>&bull; Identified SQL injection, XSS, and configuration vulnerabilities and collaborated on secure coding fixes.<br/>&bull; Used Burp Suite, Nmap, Metasploit, Wireshark, Python, and Bash for security assessments and automation.', small_style),
    Paragraph('SELECTED WORK', section_style),
    Paragraph('<b>Intelligent RAG Chatbot</b><br/>Privacy-first assistant combining a fine-tuned language model with ChromaDB retrieval to provide grounded, context-aware responses.', small_style),
    Paragraph('<b>Flight &amp; Travel Booking Platform <font color="#52616b" size="8">| Currently in progress</font></b><br/>Full-stack flight booking experience in development, with an intelligent travel assistant powered by RAG and fine-tuned models.', small_style),
    Paragraph('<b>Django + Next.js Platforms</b><br/>Responsive products backed by maintainable REST APIs, secure authentication, SQL data models, and modern React interfaces.', small_style),
    Paragraph('<b>Security Assessment Automation</b><br/>Python and Bash tooling supporting reconnaissance, API testing, and repeatable web application security workflows.', small_style),
]

left = [Paragraph('TECHNICAL SKILLS', section_style), Paragraph('<b>Frontend:</b> Next.js, React, JavaScript, Tailwind CSS, jQuery<br/><b>Backend:</b> Django, Django REST, Python, Node.js, REST APIs<br/><b>AI:</b> LLM fine-tuning, RAG, ChromaDB, local LLMs, chatbot workflows<br/><b>Data:</b> SQL, relational data modeling, vector search<br/><b>Security:</b> Burp Suite, Nmap, Metasploit, Wireshark, OWASP<br/><b>Tools:</b> Git, Postman, Linux, Bash', small_style)]
right = [Paragraph('EDUCATION', section_style), Paragraph('<b>Bachelor of Computer Science</b><br/><font color="#52616b">NUML (National University of Modern Languages)</font>', small_style), Paragraph('FOCUS', section_style), Paragraph('Private AI integrations, scalable web systems, secure APIs, and polished developer experiences.', small_style)]
columns = Table([[left, right]], colWidths=[88 * mm, 88 * mm], hAlign='LEFT')
columns.setStyle(TableStyle([('VALIGN', (0, 0), (-1, -1), 'TOP'), ('LEFTPADDING', (0, 0), (-1, -1), 0), ('RIGHTPADDING', (0, 0), (-1, -1), 10), ('TOPPADDING', (0, 0), (-1, -1), 0), ('BOTTOMPADDING', (0, 0), (-1, -1), 0)]))
story.extend([columns, Spacer(1, 5), Paragraph('Portfolio: haiderlikecodes.github.io/Muhammad-Haider/', footer_style)])

doc = SimpleDocTemplate(output, pagesize=A4, rightMargin=16 * mm, leftMargin=16 * mm, topMargin=15 * mm, bottomMargin=15 * mm, title='Muhammad Haider - CV', author='Muhammad Haider')
doc.build(story)
print(output)
