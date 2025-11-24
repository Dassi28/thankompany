import React from 'react';
import './DataPrivacy.scss';
import { useTranslation } from 'react-i18next';

const DataPrivacy = () => {
  return (
    <div className="data-privacy-page">
      <div className="container">
        <h1>Data Privacy</h1>

        <section>
          <h2>Our Commitment to Your Privacy</h2>
          <p>
            This Privacy Policy describes how your personal information is collected, used, and shared when you visit or make a purchase from our website.
          </p>
        </section>

        <section>
          <h2>Personal Information We Collect</h2>
          <p>
            When you visit the Site, we automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies that are installed on your device. Additionally, as you browse the Site, we collect information about the individual web pages or products that you view, what websites or search terms referred you to the Site, and information about how you interact with the Site. We refer to this automatically-collected information as “Device Information.”
          </p>
        </section>

        <section>
          <h2>How Do We Use Your Personal Information?</h2>
          <p>
            We use the Order Information that we collect generally to fulfill any orders placed through the Site (including processing your payment information, arranging for shipping, and providing you with invoices and/or order confirmations). Additionally, we use this Order Information to:
            Communicate with you;
            Screen our orders for potential risk or fraud; and
            When in line with the preferences you have shared with us, provide you with information or advertising relating to our products or services.
          </p>
        </section>

        <section>
          <h2>Sharing Your Personal Information</h2>
          <p>
            We share your Personal Information with third parties to help us use your Personal Information, as described above. For example, we use Shopify to power our online store--you can read more about how Shopify uses your Personal Information here: https://www.shopify.com/legal/privacy. We also use Google Analytics to help us understand how our customers use the Site--you can read more about how Google uses your Personal Information here: https://www.google.com/intl/en/policies/privacy/. You can also opt-out of Google Analytics here: https://tools.google.com/dlpage/gaoptout.
          </p>
        </section>
      </div>
    </div>
  );
};

export default DataPrivacy;
