import React, { Component } from 'react';
import * as Icon from 'react-feather';

class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="app-header">
          <h1>Partifajten h1</h1>
        </header>
        <section>
          <h2>Så ser underrubrik ut h2</h2>
          <p>Detta är helt vanlig brödtext som man använder lite överrallt och hit och dit, Med fördel är den så stor att den är skön att läsa.</p>
          <p>Ett nytt stycke helt vanlig brödtext Lörem ipsüm dölör sit ämet, cönsectetür ädipiscing elit. Mörbi feügiät vestibülüm sem, äc süscipit sem lüctüs qüis. Qüisqüe vel ligülä säpien. Pellentesqüe häbitänt mörbi tristiqüe senectüs et netüs et mälesüädä fämes äc türpis egestäs.</p>
          <h3>Så ser h3 rubrik ut</h3>
          <p>Ett nytt stycke helt vanlig brödtext Lörem ipsüm dölör sit ämet, cönsectetür ädipiscing elit. Mörbi feügiät vestibülüm sem, äc süscipit sem lüctüs qüis. Qüisqüe vel ligülä säpien. Pellentesqüe häbitänt mörbi tristiqüe senectüs et netüs et mälesüädä fämes äc türpis egestäs.</p>

            <p className="text-large">Satsa på ett Sverige där frågetext ser ut så här? </p>

          <p className="text-meta">Meta text ser ut så här</p>

          <div className="card">
            <p className="text-large">Ett kort</p>
            <div>
              <a href="#" className="btn">En knapp</a>
              <a href="#" className="btn pulse">En pulserande knapp</a>
            </div>
          </div>
          <div>
            <a href="#" className="btn btn--red btn--circular"><Icon.ThumbsDown size={40} strokeWidth={1} /></a>
            <a href="#" className="btn btn--circular btn--circular--small"><Icon.CornerUpRight size={18} strokeWidth={1} /></a>
            <a href="#" className="btn btn--circular btn--circular--small"><Icon.Heart size={18} strokeWidth={1} /></a>
            <a href="#" className="btn btn--green btn--circular"><Icon.ThumbsUp size={40} strokeWidth={1} /></a>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
