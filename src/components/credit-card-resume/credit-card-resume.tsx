import { Component, getAssetPath, h, Prop, Event } from '@stencil/core';

@Component({
  tag: 'credit-card-resume',
  styleUrl: 'credit-card-resume.scss',
  shadow: true,
  assetsDirs: ['assets']
})
export class CreditCardResume {

  /**
   * Card onwer's name
   */
  @Prop() name: string;

  /**
   * Card number
   */
  @Prop() number: string;

  /**
   * Card logo
   */
  @Prop() logo: string;

  /**
   * Card expiration
   */
  @Prop() expiration: string;

  /**
   * Card type
   */
  @Prop() type: number;

  /**
   * Card last movement
   */
  @Prop() lastmovement: string;

  /**
   * Card amount
   */
  @Prop() amount: string;

  /**
   * Card amount progress
   */
  @Prop() progress: string;

  /**
   * @Event
   * Click event
   */
  @Event({eventName: 'cardClick'}) clickEvent;

  click() {
    this.clickEvent.emit({
      name: this.name,
      number: this.number
    });
  }

  render() {

    let cardImg: string = getAssetPath('./assets/debit-card.png');
    let cardType: string = "DEBIT CARD";
    if (this.type === 1) {
      cardImg = getAssetPath('./assets/credit-card.png');
      cardType = "CREDIT CARD";
    }

    return (
      <div class="card border-success mb-3 card-container" >
        <a href="#" class="stretched-link" onClick={ () => this.click()}></a>
        <div class="row no-gutters h-100">
          <div class="col d-none d-sm-block d-sm-none d-lg-block d-md-block my-auto ">
            <div class="justify-content-center">
              <img src={cardImg} class="img-fluid card-img" ></img>
            </div>
          </div>
          <div class="col-md-10 col-xs-12 col-sm-12 justify-content-start">
            <div class="card-body">
              <div class="row no-gutters">
                <div class="col-8 align-bottom">
                  <div class="justify-content-start">
                    <p class="card-name">{this.number}</p>
                    <p class="card-number">{cardType}</p>
                    <p>
                      <small class="card-last-movement">Last movement: {this.lastmovement}</small>
                    </p>
                  </div>
                </div>
                <div class="col-4 align-bottom">
                  <div class="d-flex justify-content-end">
                    <p class="card-amount">{this.amount}</p>
                  </div>
                  <div class="progress">
                    <div class="progress-bar bg-danger" role="progressbar" style={{width: `${this.progress}%`}} aria-valuenow={this.progress} aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

}
