import React from 'react';
import { Footer } from 'flowbite-react';
import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs';
import logo from "./assets/logo trans.png";


export default function Foot() {
  return (
    <Footer container style={{ padding: '0', paddingBottom: '0' }}>
      <div className="w-full" style={{ backgroundColor: '#343A40' }}>
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="about" style={{ color: '#D2AB67', marginLeft: '42px' }} />
              <Footer.LinkGroup col>
                <Footer.Link href="#" style={{ color: '#f1c477', marginBottom: '10px' }}>Flowbite</Footer.Link>
                <Footer.Link href="#" style={{ color: '#f1c477', marginBottom: '10px' }}>Tailwind CSS</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow us" style={{ color: '#D2AB67', mmarginLeft: '42px' }} />
              <Footer.LinkGroup col>
                <Footer.Link href="#" style={{ color: '#f1c477', marginBottom: '10px' }}>Github</Footer.Link>
                <Footer.Link href="#" style={{ color: '#f1c477', marginBottom: '10px' }}>Discord</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" style={{ color: '#D2AB67', marginLeft: '45px' }} />
              <Footer.LinkGroup col>
                <Footer.Link href="#" style={{ color: '#f1c477', marginBottom: '10px' }}>Privacy Policy</Footer.Link>
                <Footer.Link href="#" style={{ color: '#f1c477', marginBottom: '10px' }}>Terms &amp; Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright href="#" by="Chhabria Housing" year={2024} style={{ color: '#f1c477' }} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon href="#" icon={BsFacebook} style={{ color: '#f1c477' }} />
            <Footer.Icon href="#" icon={BsInstagram} style={{ color: '#f1c477' }} />
            <Footer.Icon href="#" icon={BsTwitter} style={{ color: '#f1c477' }} />
          </div>
        </div>
      </div>
    </Footer>
  );
}
