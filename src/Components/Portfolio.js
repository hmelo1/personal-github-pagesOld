import React, { Component} from "react";
import { MyGameListCard, PhoNomenalCard, Websites, UnpublishedCard } from './PortfolioItems';

export default class extends Component {
  render() {
    return (
      <div>
        < Websites />
        < PhoNomenalCard />
        < MyGameListCard />
        < UnpublishedCard />
      </div>
    )
  }
}