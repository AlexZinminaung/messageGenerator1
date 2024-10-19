const Subjects = ['I', 'You', 'She', 'He', 'They', 'We'];
const PluVerbs = ["like", "love", "hate"];
const SingVerbs = ["likes", "loves", "hates"];
const Objects = ["playing football", "cooking curry", "swimming", "going to school", "coding"];


const isSubjectPru = (sub) =>
{
    if (sub === 'I' || sub === 'You' || sub === 'They' || sub === 'We')
    {
        return true;
    }

    return false;
}

const getRandom = (obj) =>
{
    const randomIndex = Math.floor(Math.random() * obj.length);
    return obj[randomIndex];
}

const getGerenate = () => {
    const getSub = getRandom(Subjects);
    let getVerb;
    if (isSubjectPru(getSub))
    {
        getVerb = getRandom(PluVerbs);
    }
    else {
        getVerb = getRandom(SingVerbs);
    }

    const getObj = getRandom(Objects);

    console.log(getSub + " " + getVerb + " " + getObj + ". ");
}

getGerenate();