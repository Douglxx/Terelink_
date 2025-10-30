
        document.addEventListener('DOMContentLoaded', function() {
            const subjectOptions = document.querySelectorAll('.subject-option');
            const formSubject = document.getElementById('formSubject');
            const messageTextarea = document.getElementById('message');
            
           
            const defaultMessages = {
                "Contratar Plano": "Olá, gostaria de contratar um plano de internet. Por favor, entre em contato comigo para mais informações.",
                "Reclamação": "Olá, gostaria de registrar uma reclamação sobre o serviço.",
                "Suporte Técnico": "Olá, preciso de suporte técnico para resolver um problema com minha conexão.",
                "Outro Assunto": "Olá, gostaria de mais informações sobre..."
            };
            
            subjectOptions.forEach(option => {
                option.addEventListener('click', function() {
                    
                    subjectOptions.forEach(btn => btn.classList.remove('active'));
                    
                    this.classList.add('active');
                 
                    const subject = this.getAttribute('data-subject');
                    formSubject.value = subject;
                    
                    if (!messageTextarea.value || Object.values(defaultMessages).includes(messageTextarea.value)) {
                        messageTextarea.value = defaultMessages[subject];
                    }
                });
            });
            
            const phoneInput = document.getElementById('phone');
            phoneInput.addEventListener('input', function(e) {
                let value = e.target.value.replace(/\D/g, '');
                
                if (value.length > 11) {
                    value = value.slice(0, 11);
                }
                
                if (value.length > 0) {
                    value = value.replace(/^(\d{2})(\d)/g, '($1) $2');
                    
                    if (value.length > 10) {
                        value = value.replace(/(\d{5})(\d)/, '$1-$2');
                    } else {
                        value = value.replace(/(\d{4})(\d)/, '$1-$2');
                    }
                }
                
                e.target.value = value;
            });
            
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                    e.preventDefault();
                    const targetId = this.getAttribute('href');
                    if (targetId === '#') return;
                    
                    const targetElement = document.querySelector(targetId);
                    if (targetElement) {
                        targetElement.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }
                });
            });
        });
