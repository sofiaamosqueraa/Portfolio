import React from 'react';

const Certifications = () => {
  return (
    <section id="certifications">
      <h2>Minhas Certificações</h2>
      
      {/* Primeiro Badge do Credly */}
      <div data-iframe-width="150" data-iframe-height="270" data-share-badge-id="a09e5284-d822-425b-b852-40b6d041ec99" data-share-badge-host="https://www.credly.com"></div>
      <script type="text/javascript" async src="//cdn.credly.com/assets/utilities/embed.js"></script>

      {/* Segundo Badge do Credly */}
      <div data-iframe-width="150" data-iframe-height="270" data-share-badge-id="7f504c3c-ede6-4246-92fc-5c7faa26b443" data-share-badge-host="https://www.credly.com"></div>
      <script type="text/javascript" async src="//cdn.credly.com/assets/utilities/embed.js"></script>

      {/* Terceiro Badge do Credly */}
      <div data-iframe-width="150" data-iframe-height="270" data-share-badge-id="8859cd3f-789d-4363-a4d3-7fd66af2d603" data-share-badge-host="https://www.credly.com"></div>
      <script type="text/javascript" async src="//cdn.credly.com/assets/utilities/embed.js"></script>

    </section>
  );
};

export default Certifications;
