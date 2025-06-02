
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  // ID da planilha Google Sheets - facilmente configurável
  const GOOGLE_SHEETS_ID = 'YOUR_GOOGLE_SHEETS_ID_HERE';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Aqui você integraria com Google Sheets API
      console.log('Dados do formulário:', formData);
      
      // Simulação de envio
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Mensagem enviada!",
        description: "Entraremos em contato em breve.",
      });
      
      setFormData({ name: '', phone: '', email: '', subject: '' });
    } catch (error) {
      toast({
        title: "Erro ao enviar",
        description: "Tente novamente mais tarde.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-20 bg-hinode-light">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-hinode-primary mb-6">
              Entre em Contato e Dê o Primeiro Passo para Mudar de Vida
            </h2>
            
            <p className="text-lg text-hinode-dark">
              Preencha o formulário abaixo para saber mais sobre como iniciar sua jornada como representante Hinode. 
              Estou aqui para te ajudar a começar com o pé direito!
            </p>
          </div>
          
          <div className="bg-hinode-white p-8 rounded-lg shadow-lg animate-zoom-in">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-hinode-dark font-medium mb-2">
                    Nome *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="border-hinode-secondary/30"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-hinode-dark font-medium mb-2">
                    Telefone *
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="border-hinode-secondary/30"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-hinode-dark font-medium mb-2">
                  E-mail *
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="border-hinode-secondary/30"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-hinode-dark font-medium mb-2">
                  Assunto
                </label>
                <Textarea
                  id="subject"
                  name="subject"
                  rows={4}
                  value={formData.subject}
                  onChange={handleChange}
                  className="border-hinode-secondary/30"
                  placeholder="Conte-me mais sobre seu interesse em trabalhar com a Hinode..."
                />
              </div>
              
              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-hinode-primary hover:bg-hinode-primary/90 text-hinode-white py-3"
              >
                {isLoading ? 'Enviando...' : 'Enviar Mensagem'}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
