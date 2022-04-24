const Subscribe = () => {
  return (
    <section className="subscribe">
      <div className="container">
        <div style={{backgroundImage: 'url(/images/subscribe.jpg)'}} className="subscribe__content">
          <h4>Системд бүртгүүлснээр форумаар бусад хэрэглэгчидтэй бүтээгдэхүүний талаар санал бодлоо хуваалцах боломжтой.</h4>

          <form className="subscribe__form">
            <button type="submit" className="btn btn--rounded btn--purple">Бүртгүүлэх</button>
          </form>
        </div>
      </div>
    </section>
  )
};


export default Subscribe