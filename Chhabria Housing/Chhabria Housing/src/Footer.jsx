import React from 'react';
import { Footer } from 'flowbite-react';
import { BsWhatsapp, BsInstagram, BsFacebook, BsYoutube } from 'react-icons/bs';


export default function Foot() {
  return (
    <Footer container style={{ padding: '0', paddingBottom: '0' }}>
      <div className="w-full" style={{ backgroundColor: '#343A40',padding:'1%' }}>
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-2 sm:gap-6">
            <div>
              <Footer.Title title="Follow us" style={{ color: '#D2AB67', mmarginLeft: '42px' }} />
              <Footer.LinkGroup col>
                <Footer.Link href="https://www.youtube.com/channel/UCvcdCnhKn5MTt1WJbEPNYyw" style={{ color: '#f1c477', marginBottom: '10px' }}>Youtube</Footer.Link>
                <Footer.Link href="https://www.facebook.com/profile.php?id=100064404750179" style={{ color: '#f1c477', marginBottom: '10px' }}>Facebook</Footer.Link>
                <Footer.Link href="https://www.instagram.com/chhabriahousing/" style={{ color: '#f1c477', marginBottom: '10px' }}>Instagram</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" style={{ color: '#D2AB67', marginLeft: '45px'}} />
              <Footer.LinkGroup col>
                <Footer.Link href="/privacy-policy" style={{ color: '#f1c477', marginBottom: '10px' }}>Privacy Policy</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright href="#" by="Chhabria Housing" year={2024} style={{ color: '#f1c477' }} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon href="https://wa.me/9821858892" icon={BsWhatsapp} style={{ color: '#f1c477' }} />
            <Footer.Icon href="https://www.instagram.com/chhabriahousing/" icon={BsInstagram} style={{ color: '#f1c477' }} />
            <Footer.Icon href="https://www.facebook.com/profile.php?id=100064404750179" icon={BsFacebook} style={{ color: '#f1c477' }} />
            <Footer.Icon href="https://www.youtube.com/channel/UCvcdCnhKn5MTt1WJbEPNYyw" icon={BsYoutube} style={{ color: '#f1c477' }} />
          </div>
        </div>
      </div>
    </Footer>
  );
}
