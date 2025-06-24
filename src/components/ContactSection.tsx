import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { sendToGoogleSheets } from "@/utils/googleSheets";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const spreadsheetId = "1V7q1-JYXX77BrVAWKKzHpuhROvH3n8P1digIxv2lmp4";

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "Olá! Gostaria de saber mais sobre a oportunidade de trabalhar com a Hinode! Vim pelo site."
    );
    window.open(`https://wa.me/5519991517459?text=${message}`, "_blank");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const success = await sendToGoogleSheets(
        formData,
        spreadsheetId,
        "Página1"
      );

      if (success) {
        setSubmitStatus("success");
        setFormData({ name: "", phone: "", email: "", subject: "" });
      } else {
        throw new Error("Falha no envio para Google Sheets");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-hinode-white px-6 md:px-8 lg:px-12">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-8 md:mb-12 lg:mb-16 animate-fade-in">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-hinode-navy mb-4 md:mb-6">
            Entre em Contato e Dê o Primeiro Passo para Mudar de Vida
          </h2>

          <p className="text-sm md:text-base text-hinode-dark max-w-4xl mx-auto mb-6 md:mb-8 leading-relaxed">
            Preencha o formulário abaixo para saber mais sobre como iniciar sua
            jornada como representante Hinode. Estou aqui para te ajudar a
            começar com o pé direito!
          </p>

          <Button
            onClick={handleWhatsAppClick}
            className="bg-hinode-success hover:bg-hinode-success/90 text-hinode-white px-4 md:px-6 py-2 md:py-3 rounded-full font-bold transition-all duration-300 hover:scale-105 shadow-lg mb-8 md:mb-12 text-sm md:text-base"
          >
            <svg
              className="w-4 h-4 mr-2"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.108" />
            </svg>
            Fale Direto no WhatsApp
          </Button>
        </div>

        <div className="max-w-2xl mx-auto">
          {submitStatus === "success" && (
            <div className="mb-6 p-6 bg-green-50 border border-green-200 rounded-lg text-center animate-fade-in">
              <div className="text-green-600 text-4xl mb-3">✅</div>
              <h3 className="text-lg font-semibold text-green-800 mb-2">
                Formulário enviado com sucesso!
              </h3>
              <p className="text-green-700">
                Seus dados foram registrados e entraremos em contato em breve.
              </p>
            </div>
          )}

          {submitStatus === "error" && (
            <div className="mb-6 p-6 bg-red-50 border border-red-200 rounded-lg text-center animate-fade-in">
              <div className="text-red-600 text-4xl mb-3">❌</div>
              <h3 className="text-lg font-semibold text-red-800 mb-2">
                Erro ao enviar formulário
              </h3>
              <p className="text-red-700">
                Tente novamente ou entre em contato via WhatsApp.
              </p>
            </div>
          )}

          <div className="relative">
            {isSubmitting && (
              <div className="absolute inset-0 bg-white/80 flex items-center justify-center rounded-lg z-10">
                <div className="text-center">
                  <svg
                    className="animate-spin h-12 w-12 text-hinode-primary mx-auto mb-4"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  <p className="text-hinode-primary font-semibold">
                    Enviando mensagem...
                  </p>
                </div>
              </div>
            )}

            <form
              onSubmit={handleSubmit}
              className="space-y-4 md:space-y-6 animate-zoom-in"
            >
              <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Seu nome completo"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-hinode-primary/20 rounded-lg focus:ring-2 focus:ring-hinode-primary focus:border-transparent text-base"
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <Input
                    type="tel"
                    name="phone"
                    placeholder="Seu telefone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-hinode-primary/20 rounded-lg focus:ring-2 focus:ring-hinode-primary focus:border-transparent text-base"
                    required
                    disabled={isSubmitting}
                  />
                </div>
              </div>

              <div>
                <Input
                  type="email"
                  name="email"
                  placeholder="Seu e-mail"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-hinode-primary/20 rounded-lg focus:ring-2 focus:ring-hinode-primary focus:border-transparent text-base"
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <Textarea
                  name="subject"
                  placeholder="Conte um pouco sobre você e seus objetivos..."
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-hinode-primary/20 rounded-lg focus:ring-2 focus:ring-hinode-primary focus:border-transparent resize-none text-base"
                  rows={5}
                  required
                  disabled={isSubmitting}
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-hinode-primary hover:bg-hinode-primary/90 text-hinode-navy font-bold py-3 md:py-4 px-6 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg text-base md:text-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
