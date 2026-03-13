<script setup lang="ts">
const handleSubmit = () => {
  const el = document.querySelector("#contact-form") as HTMLFormElement;
  const data = new FormData(el);
  const subject = encodeURIComponent("Kontaktanfrage Portfolio");
  const body = encodeURIComponent(
    `Name: ${data.get("name")}\nE-Mail: ${data.get("email")}\n\n${data.get("message")}`
  );
  window.location.href = `mailto:isabella.aigner@gmail.com?subject=${subject}&body=${body}`;
};
</script>

<template>
  <section id="contact" class="contact-section">
    <div class="page-inner">
      <div class="contact-head">
        <span class="section-tag">💬 Hast du Fragen oder Ideen? Lass uns reden! 🚀</span>
        <h2 class="section-h2">Jetzt kontaktieren!</h2>
      </div>
      <div class="contact-cols">
        <div class="contact-form-wrap">
          <form id="contact-form" @submit.prevent="handleSubmit">
            <div class="form-group">
              <label>Name</label>
              <input name="name" type="text" placeholder="Vorname Nachname" required />
            </div>
            <div class="form-group">
              <label>E-Mail</label>
              <input name="email" type="email" placeholder="E-Mail Adresse" required />
            </div>
            <div class="form-group">
              <label>Nachricht</label>
              <textarea name="message" placeholder="Was möchtest du mir sagen?" required></textarea>
            </div>
            <button type="submit" class="contact-btn">Nachricht senden →</button>
          </form>
        </div>
        <div class="contact-img-wrap">
          <img src="/assets/images/contact-form-bg.jpg" alt="Isabella Aigner" />
        </div>
      </div>
    </div>
  </section>
</template>

<style>
#contact.contact-section {
  background: #0D1A2C;
  padding: 0 0 110px;
  scroll-margin-top: 70px;
  max-width: none;
  margin-left: unset;
  margin-right: unset;
}

@media (max-width: 768px) {
  #contact.contact-section { padding-bottom: 60px; }
}

#contact.contact-section .contact-head {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  text-align: center;
  margin-bottom: 60px;
  padding: 110px 0 0;
}

@media (max-width: 768px) {
  #contact.contact-section .contact-head { padding-top: 60px; margin-bottom: 36px; }
}

#contact.contact-section .contact-cols {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  align-items: start;
}

@media (max-width: 900px) {
  #contact.contact-section .contact-cols { grid-template-columns: 1fr; }
}

#contact.contact-section .contact-form-wrap {
  background: #253349;
  border-radius: 4px;
  padding: 40px 30px;
  display: flex;
  flex-direction: column;
}

@media (max-width: 768px) {
  #contact.contact-section .contact-form-wrap { padding: 24px 20px; }
}

#contact.contact-section .contact-form-wrap form {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

#contact.contact-section .form-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

#contact.contact-section .form-group label {
  font-size: 0.9375rem;
  font-weight: 500;
  color: rgba(216,235,255,0.75);
}

#contact.contact-section .form-group input,
#contact.contact-section .form-group textarea {
  background: #D9ECFF;
  border: none;
  border-radius: 6px;
  padding: 16px 17px;
  color: #1F2E42;
  font-size: 1rem;
  font-family: inherit;
  outline: none;
  width: 100%;
  transition: opacity 0.2s;
}

#contact.contact-section .form-group input::placeholder,
#contact.contact-section .form-group textarea::placeholder {
  color: rgba(31,46,66,0.55);
}

#contact.contact-section .form-group input:focus,
#contact.contact-section .form-group textarea:focus {
  opacity: 0.9;
}

#contact.contact-section .form-group textarea {
  resize: vertical;
  min-height: 141px;
}

#contact.contact-section .contact-btn {
  width: 100%;
  margin-top: 8px;
  padding: 14px 24px;
  background: linear-gradient(180deg, #EBF3FA 0%, #DFEDFA 100%);
  color: #1F2E42;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  font-family: inherit;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: opacity 0.2s;
}

#contact.contact-section .contact-btn:hover { opacity: 0.88; }

#contact.contact-section .contact-img-wrap {
  border-radius: 20px;
  overflow: hidden;
}

#contact.contact-section .contact-img-wrap img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

@media (max-width: 900px) {
  #contact.contact-section .contact-img-wrap { height: 300px; }
}
</style>
