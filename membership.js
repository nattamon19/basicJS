class Membership {
    constructor() {
        this.autold = 1
        this.member = []
    }

    findMemberId(id) {
        //const number = (element) => element = 1
        return this.member.findIndex(id)
    }

    findMemberName(name) {
        
    }

    subscribe(name) {

    }

    unsubscribe(id) {

    }
  }

  const mb1 = new Membership()
  console.log(mb1);
  //console.log(mb1.findMemberId(1));