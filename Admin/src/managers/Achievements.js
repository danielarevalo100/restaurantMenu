import { API_account } from 'managers/Api';
import Notifications from 'managers/Notifications'
import BlockWinLogo from 'assets/svgs/blocks/blockWin.svg';
import { blocksOrder } from 'utils/constants';

/* managers */
import Localize from 'managers/Localize';

export default class Achievements {

  static current = Achievements.current || new Achievements();

  constructor() {
    this.achievements = [];
    this.visitedItems = blocksOrder.reduce((acc, val) => ({...acc, [val]: []}), {})
  }

  /* setters */
  set(key, value) {
    if( !this.achievements ) { return; }
    this.achievements[key] = value;
  }

  unset(key) {
    if( !this.achievements ) { return; }
    delete this.achievements[key];
  }

  /* getters */
  get(key) {
    if( !this.achievements ) { return null; }
    return this.achievements[key];
  }

  initialize(keys) {
    this.achievements = Object.keys(keys).map((key) => blocksOrder[key-1])
  }

  addVisitedItem(block, itemIndex) {
    if ( !this.visitedItems[block]?.includes(itemIndex) ) {
      this.visitedItems[block]?.push(itemIndex)
    }
  }

  getVisitedItems(block) {
    if(this.hasBeenRewarded(block)) return [0,1,2]
    return this.visitedItems[block] || [];
  }

  addAchievement(ach) {
    if( this.achievements && !this.hasBeenRewarded(ach) ) {
      this.achievements.push(ach)
      API_account.charge({ code: window.code, blockIndex: blocksOrder.indexOf(ach) +1 }, (response) => {
        if( response ) {
          Notifications.post('SHOW_ACHIEVEMENT', { title: Localize.key('General', 'Achievements', 'CompleteTitle'), image: BlockWinLogo, desc: Localize.key('General', 'Achievements', 'CompleteText') })
          Notifications.post('BLOCK_COMPLETED');
        }
      })
    }
  }

  hasBeenRewarded(sat) {
    return this.achievements?.includes(sat) || false;
  }

  allBlocksCompleted() {
    return blocksOrder.every((item) => this.achievements?.includes(item))
  }

  getTotal() {
    return this.achievements.length * 200
  }

}
