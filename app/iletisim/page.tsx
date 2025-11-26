import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import { MapPin, Phone, Mail, Send } from "lucide-react";

export const metadata = {
  title: "İletişim | Gayrimenkul Demo",
  description: "Bizimle iletişime geçin.",
};

export default function IletisimPage() {
  return (
    <main className="w-full bg-white min-h-screen pb-20">
      
      <Breadcrumb 
        title="İletişim" 
        breadcrumbTitle="İletişim"
        image="/breadcrumb.jpg" 
      />

      <div className="w-full max-w-[1280px] mx-auto px-4 mt-16 md:mt-24 flex flex-col lg:flex-row gap-12 lg:gap-20">
        
        <div className="flex-1 flex flex-col gap-10">
          
          <div>
            <h5 className="text-primary font-medium tracking-wider uppercase mb-2">Bize Ulaşın</h5>
            <h1 className="text-3xl md:text-5xl font-normal text-[#2D2D2D] mb-6">
              Bir Kahve İçmeye Bekleriz
            </h1>
            <p className="text-[#747474] font-light leading-relaxed text-lg">
              Projelerimiz hakkında detaylı bilgi almak, gayrimenkul danışmanlığı talep etmek veya sadece tanışmak için ofisimize bekleriz.
            </p>
          </div>

          <div className="grid gap-6">
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="text-xl font-medium text-[#2D2D2D] mb-1">Ofis Adresi</h4>
                <p className="text-[#747474] font-light">
                  Maslak Mah. Büyükdere Cad. No:123 <br /> Sarıyer / İstanbul
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center shrink-0">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="text-xl font-medium text-[#2D2D2D] mb-1">Telefon</h4>
                <p className="text-[#747474] font-light">
                  +90 (212) 123 45 67
                </p>
                <p className="text-[#747474] font-light text-sm">
                  (Hafta içi 09:00 - 18:00)
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center shrink-0">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="text-xl font-medium text-[#2D2D2D] mb-1">E-Posta</h4>
                <p className="text-[#747474] font-light">
                  info@emlakprojesi.com
                </p>
              </div>
            </div>

          </div>

          <div className="w-full h-[300px] rounded-[2rem] overflow-hidden shadow-lg mt-4 grayscale hover:grayscale-0 transition-all duration-500">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3006.6377693933596!2d29.01426177651786!3d41.10892447133711!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab5c163098e9b%3A0x7d27e0892095f4e!2sMaslak%2C%20Sar%C4%B1yer%2F%C4%B0stanbul!5e0!3m2!1str!2str!4v1716234567890!5m2!1str!2str" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

        </div>

        <div className="flex-1">
          <div className="bg-white rounded-[2rem] shadow-2xl p-8 md:p-12 border border-gray-100">
            <h3 className="text-2xl font-normal text-[#2D2D2D] mb-8">Mesaj Gönderin</h3>
            
            <form className="flex flex-col gap-6">
              
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-gray-500 ml-1">Adınız Soyadınız</label>
                <input 
                  type="text" 
                  placeholder="Örn: Ahmet Yılmaz" 
                  className="w-full bg-[#F9F9F9] border border-gray-200 rounded-xl px-5 py-4 outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-[#2D2D2D]"
                />
              </div>

              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1 flex flex-col gap-2">
                  <label className="text-sm font-medium text-gray-500 ml-1">E-Posta Adresi</label>
                  <input 
                    type="email" 
                    placeholder="ornek@mail.com" 
                    className="w-full bg-[#F9F9F9] border border-gray-200 rounded-xl px-5 py-4 outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-[#2D2D2D]"
                  />
                </div>
                <div className="flex-1 flex flex-col gap-2">
                  <label className="text-sm font-medium text-gray-500 ml-1">Telefon Numarası</label>
                  <input 
                    type="tel" 
                    placeholder="0555 000 00 00" 
                    className="w-full bg-[#F9F9F9] border border-gray-200 rounded-xl px-5 py-4 outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-[#2D2D2D]"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-gray-500 ml-1">Konu</label>
                <select className="w-full bg-[#F9F9F9] border border-gray-200 rounded-xl px-5 py-4 outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-[#2D2D2D] appearance-none cursor-pointer">
                  <option>Genel Bilgi Almak İstiyorum</option>
                  <option>Proje Detayları Hakkında</option>
                  <option>Randevu Talep Ediyorum</option>
                  <option>Diğer</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-gray-500 ml-1">Mesajınız</label>
                <textarea 
                  rows={5}
                  placeholder="Mesajınızı buraya yazabilirsiniz..." 
                  className="w-full bg-[#F9F9F9] border border-gray-200 rounded-xl px-5 py-4 outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-[#2D2D2D] resize-none"
                ></textarea>
              </div>

              <button 
                type="button" 
                className="w-full bg-primary text-white font-medium py-4 rounded-xl shadow-lg hover:bg-opacity-90 hover:shadow-orange-200/50 transition-all flex items-center justify-center gap-2 mt-2"
              >
                <span>Mesajı Gönder</span>
                <Send className="w-5 h-5" />
              </button>

            </form>
          </div>
        </div>

      </div>
    </main>
  );
}