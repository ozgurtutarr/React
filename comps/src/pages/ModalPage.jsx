import { useState } from 'react';

import Modal from '../components/Modal';
import Button from '../components/Button';
import DropdownPage from './DropdownPage';

function ModalPage() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const actionBar = (
    <div>
      <Button primary onClick={handleClose}>
        I accept
      </Button>
    </div>
  );

  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      <p>Here is an important agreement for you to accept</p>
    </Modal>
  );

  return (
    <div className="relative">
      <Button onClick={handleClick} success>
        Open Modal
      </Button>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio impedit
        totam asperiores eius fugiat, quis voluptas voluptatibus eum aut
        repellat illum nihil in perferendis doloribus nam accusantium harum?
        Commodi, non! Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Ab illum quis consequuntur saepe minima ullam modi, neque nulla
        excepturi, eligendi dolor quos placeat ducimus repellendus iste id,
        labore ipsum odio! Officiis autem doloribus maiores, esse accusamus
        omnis, ipsum atque quaerat totam fugit beatae voluptate! Nulla earum,
        nemo minima neque est molestias? Incidunt facere enim unde, nihil fugiat
        dolorem sed quidem. Magni odit reiciendis fugit ratione vitae
        voluptatibus magnam facere, accusamus excepturi culpa aut numquam eaque
        nisi ex perspiciatis architecto atque illum eveniet! Incidunt excepturi
        natus, aliquid ipsam doloribus nam fuga! Id itaque est eum eligendi
        nihil culpa ducimus perferendis laborum animi doloribus tempore,
        explicabo vero magnam expedita ipsa voluptatum doloremque nulla sunt
        voluptate inventore saepe odit quod! Magni, quasi esse! Ipsa, nihil.
        Unde sed error dolores hic cupiditate! Fuga, nisi! Libero itaque porro
        optio provident eligendi esse consectetur rem aperiam ipsa vero,
        voluptas ipsam hic impedit dolorum nobis quis beatae. Ad culpa enim in
        sit optio beatae ea! Dignissimos, eaque sapiente! Architecto ipsam enim
        illum tenetur magni harum sed nostrum voluptas quisquam fuga, eum
        reprehenderit, quaerat voluptate nihil animi repudiandae. Sapiente
        quisquam eligendi aperiam neque necessitatibus molestias vero odit saepe
        in illo! Facilis repellendus molestiae illo, necessitatibus alias
        repudiandae veritatis dolorem a deleniti sed cum voluptatibus veniam
        aliquid quod doloribus. Consequatur maxime adipisci debitis, numquam
        fugiat dignissimos iure exercitationem possimus veritatis repudiandae
        consectetur repellat distinctio rerum, totam sunt iusto ullam dolor hic
        corporis repellendus. Consequuntur ratione quis voluptas eum labore?
        Doloribus, qui optio labore accusantium corrupti quaerat voluptas
        incidunt a velit dicta, natus reprehenderit quas exercitationem tempora
        dignissimos tempore fugiat, harum et neque quam quod iste unde accusamus
        placeat! Voluptas! Laboriosam eligendi eos incidunt, voluptate ex
        placeat ipsa sed reprehenderit odit, repellat minima nam! Laboriosam a
        placeat nam, voluptas magni expedita labore sed asperiores deserunt,
        delectus velit quos eligendi ut! Ullam est modi at expedita odio sed
        atque debitis similique eos! Laboriosam, tenetur atque nam iste
        explicabo voluptatibus, officia quos labore eaque minima repellendus
        distinctio eos doloremque magnam sapiente nobis! Numquam a odit aut
        magni dolore quam ut. Cupiditate, veritatis autem quo distinctio
        deleniti amet. Aperiam ad optio non voluptatum. Cumque eveniet neque
        repellat eos odit facere fuga minus libero. Magnam minima tempore
        tenetur odit voluptate ducimus, ipsum cum pariatur autem dolore sint
        reiciendis quo expedita facere veritatis temporibus voluptatum
        laudantium rem fugit eveniet perferendis blanditiis! Odio vitae rerum
        deserunt! Ratione quis et amet, reiciendis aspernatur quaerat placeat
        eveniet odio, aliquam enim autem deserunt impedit unde in dolorem, quam
        excepturi vero maiores officiis nisi sed laboriosam. Quo distinctio
        dolores quasi? Pariatur aut accusantium nihil praesentium soluta itaque
        cupiditate et esse optio autem fugiat dolorum debitis delectus ea vel
        vero maiores magnam distinctio, fugit blanditiis iure. Natus sapiente
        iure sint ducimus. Ad sint iste nemo consequuntur. Vel quos facilis sed
        fugit dicta nostrum animi, beatae ipsam nihil! Provident, at impedit
        exercitationem, voluptates incidunt accusamus iusto nesciunt earum
        labore enim ratione recusandae. Voluptate, beatae. Eum amet similique
        voluptatum dolor unde aspernatur accusantium, optio recusandae vero
        debitis facilis in minima delectus itaque incidunt illum, totam
        architecto magni at consectetur dolores molestias fuga eaque.
        Perspiciatis saepe quidem consectetur illum quam sint in doloribus
        delectus officiis blanditiis repellat assumenda non distinctio, aperiam
        debitis quas ipsum, necessitatibus, beatae magnam quae? Aliquid
        perspiciatis repellat molestias praesentium sed? Tenetur voluptatem id
        nobis quod quibusdam, magni ratione reiciendis quis corrupti illum dolor
        ad voluptatibus, aliquid facere reprehenderit in harum fugiat quisquam
        placeat eos blanditiis, atque quo. Id, praesentium facere? Quia
        corrupti, laboriosam quisquam aliquid laborum sit sequi nemo ratione,
        repudiandae aliquam iste quam? Consequuntur voluptates, maxime totam
        necessitatibus est iste ab quae veniam nam pariatur dolores quidem vero
        molestias. Sapiente harum atque quibusdam architecto minus a laboriosam
        odio ipsam reiciendis quia quos beatae nobis pariatur natus ex suscipit
        voluptates soluta eveniet nihil exercitationem sed aut, ea totam! Animi,
        qui. Earum minima, labore deleniti dicta, possimus quia minus molestiae
        placeat nemo iusto dolore quidem id veniam laboriosam sunt provident
        fugiat maiores alias nesciunt veritatis ipsum commodi vero? Quia,
        reprehenderit modi. Temporibus voluptas distinctio eos cupiditate
        corporis beatae, tempora inventore ea iure laudantium sed aperiam
        incidunt nobis sunt voluptates. Quas necessitatibus quisquam nisi
        consequuntur architecto vitae tenetur quod enim minima esse? Quibusdam
        ut temporibus sequi deleniti eligendi delectus doloremque explicabo
        exercitationem quasi incidunt repellat, officia ipsa magnam dolor in
        consectetur repudiandae tempora quisquam pariatur ea repellendus ullam
        nam qui aliquid. Provident! Quisquam quam doloremque adipisci atque
        debitis, reiciendis, dignissimos a nisi quaerat eos animi tempora minus
        quo unde officia sequi velit saepe ducimus quia reprehenderit molestias.
        Fugiat magni accusantium nobis ab! Fugiat, excepturi ipsam quis aliquam
        reiciendis numquam suscipit error repudiandae quasi laudantium
        laboriosam harum aperiam quae voluptate ipsa minima, nobis id eos
        voluptatibus, dicta delectus eligendi cumque porro! Minima, voluptatum!
        Non sequi eos inventore iusto similique sint, quis exercitationem nihil
        in dicta quod ullam laboriosam praesentium? Iure voluptatem tempora
        necessitatibus officiis, esse consequuntur! Sint repellendus excepturi
        iste reiciendis magnam pariatur. Ratione animi similique inventore
        vitae, aliquam consequatur odio nobis blanditiis mollitia aut debitis
        praesentium illo recusandae repudiandae nemo cumque fuga repellendus
        vero, commodi officiis. Voluptates consequatur pariatur cupiditate
        delectus expedita. Eligendi illum porro fuga ad, quo odio sapiente, quod
        repellendus saepe, expedita velit nulla ab. Quisquam error eaque maiores
        molestiae porro excepturi, neque, non esse facilis, nulla maxime
        voluptatibus aspernatur. Reiciendis doloremque ut sequi ipsam, dolorem
        dignissimos, ea molestias quam nesciunt autem doloribus. Eius maxime
        repellat, eligendi quia aperiam nulla aliquam neque eum vel, ea
        repudiandae distinctio labore, tempore quasi. Illo voluptatibus
        dignissimos facere alias nihil itaque et ea nesciunt error quos odio
        porro recusandae, vel dolores asperiores ducimus fugit magnam mollitia,
        iusto dolorem temporibus voluptate sint culpa quibusdam. Ad. Corrupti
        odio dignissimos nam velit porro voluptas ullam corporis optio
        repudiandae quidem, labore debitis? Sequi esse quam excepturi, ipsum
        assumenda neque, aliquid non illum dicta consequatur, vitae sint
        nesciunt aspernatur! Accusantium, autem? Fugiat ad delectus corrupti
        soluta illum id commodi dolore quasi, quaerat esse placeat minima,
        assumenda possimus architecto pariatur perferendis facere officia quidem
        impedit debitis sunt. Minima, consequatur rerum. Suscipit sequi harum
        saepe natus mollitia quae sunt nostrum perferendis, vel placeat adipisci
        quod nihil earum et facilis! Vitae laboriosam, officiis temporibus
        dolore neque suscipit ipsa expedita. Sequi, odit. Ad. Provident ut
        dolore ullam corporis repellendus labore voluptates rerum reprehenderit,
        velit perferendis molestiae ab? Magni similique expedita voluptatibus
        autem obcaecati commodi sint laborum amet ratione eveniet! Iusto
        incidunt minima consequatur. Dolorum, rem reiciendis voluptates fugiat,
        fuga itaque reprehenderit officia ullam sed molestias nihil rerum in
        ipsum alias tenetur velit libero commodi error? Est, natus deleniti!
        Adipisci optio dignissimos ipsum excepturi. Perferendis autem sapiente
        dicta aliquid ipsa delectus dolorum, temporibus recusandae natus
        necessitatibus nam illo doloremque quia minima ab alias, iure maiores
        error mollitia nemo dolorem. Hic pariatur iusto nulla perspiciatis? Unde
        error sed velit et inventore est hic, nobis, cumque vitae corrupti enim
        placeat accusamus. Neque laborum quaerat ex accusantium fugiat quas non,
        magnam architecto, ipsum eos assumenda, dolorem officia! Asperiores
        fugiat nisi quisquam illum laudantium et cum voluptatibus odit libero
        facere cupiditate at dolorum corrupti quos quam voluptatum, fuga
        possimus reiciendis aliquam. Modi rerum tenetur fugit! Perspiciatis,
        expedita perferendis! Excepturi repellat illo natus optio quod non
        repudiandae. Iste, rem maxime. Quod, voluptate. Ut aspernatur iure
        tenetur dolores in, sed eveniet enim explicabo rerum consequatur
        eligendi reprehenderit neque beatae quas. Blanditiis sed ex eos culpa,
        odio praesentium nulla veniam ratione ipsam molestias dicta velit, rerum
        facere doloribus eveniet rem nam soluta exercitationem ab vitae officiis
        cumque ullam minus? Minima, reiciendis. Doloremque nihil ea alias, ad
        deserunt repudiandae adipisci, soluta similique sunt voluptates magnam
        nulla magni tempora a. Hic sint natus dolor non, beatae illum, eveniet
        cumque veniam exercitationem at architecto. Rem, soluta deserunt
        accusantium perferendis quos dicta a laboriosam est commodi quisquam
        vero culpa incidunt saepe esse autem. Consectetur unde eligendi
        reprehenderit deleniti id dolor corrupti ex minus magnam debitis?
        Delectus eveniet illum pariatur possimus id culpa omnis dicta, a porro
        dolores autem provident voluptatibus suscipit quod, in excepturi.
        Corrupti tempora consectetur voluptatem at molestiae voluptatum optio
        numquam vero vitae. Animi quisquam quos iste! Veniam ipsum fugit
        consequatur quis et alias quaerat sint voluptates, at quidem ex. Aut at
        quam quia dignissimos temporibus officiis nostrum quos, placeat ipsam
        nisi sapiente. Commodi reprehenderit animi officiis eligendi modi eum
        delectus suscipit ad nesciunt, aliquam magnam dolores, ratione
        distinctio amet, deleniti ducimus ab voluptatem. Voluptate doloremque
        nam sunt, expedita ex vitae quod eius! Blanditiis enim officia ratione
        error exercitationem id quis rerum adipisci, consequatur veniam
        laudantium natus beatae optio sunt iure officiis, nemo quos aliquid nisi
        eveniet, similique labore? Officia enim at iusto. Alias aspernatur
        libero nulla error commodi natus pariatur cumque accusamus blanditiis,
        dolores odio unde rerum ipsa aperiam quisquam perferendis, facere
        excepturi hic impedit neque corporis! Illo nobis ipsa minus aliquam?
        Aspernatur, quibusdam tenetur! Consequatur facilis odio, inventore animi
        beatae deleniti repellat harum ipsam quibusdam aliquid fuga tempora
        nihil nobis commodi quas eum magnam quasi doloribus pariatur fugiat?
        Hic, excepturi aut. Blanditiis soluta impedit iste commodi illo
        accusantium facilis, cum asperiores nemo vitae? Dolorum necessitatibus
        vel id dolores officia perferendis saepe ratione deserunt eaque ducimus,
        dolore delectus culpa cumque vitae libero. Dolorum, assumenda quae!
        Blanditiis, sapiente exercitationem, praesentium unde fuga impedit nisi
        dolor ut itaque, ex qui magni minima nihil corrupti ad velit sit quas!
        Fugiat ipsa iure provident earum explicabo? Nihil minima facilis, quam
        culpa vel nulla rerum deserunt soluta ut eveniet architecto saepe, eum
        dicta eaque cupiditate ex obcaecati doloribus distinctio nisi amet,
        totam impedit recusandae doloremque! Voluptas, quos! Dolorem hic
        consequuntur illum provident totam? Deserunt, eius pariatur repellat ut
        recusandae sed eligendi corrupti totam est ab facere commodi
        consequuntur inventore dolorem laborum nobis aperiam impedit saepe
        itaque quis? Earum ducimus alias quis velit saepe deleniti quo
        cupiditate ipsa laborum commodi exercitationem rerum doloremque non
        quidem explicabo reprehenderit, tempore aliquid laudantium optio
        molestiae minima. Placeat, dignissimos perspiciatis? Natus, aliquid.
        Excepturi iusto mollitia eligendi et explicabo eos dolor debitis tempora
        doloremque dolore, fugit dolorum blanditiis enim nobis aut aliquid
        voluptates amet facilis labore neque autem illum libero cupiditate.
        Maxime, dolorem? Quam facilis nam non officia tenetur, iure earum,
        molestias iusto amet laborum dolor tempore aperiam laboriosam magni id
        soluta ipsa, dolores neque explicabo. Similique eaque debitis doloribus
        ipsam error vel. Ullam, voluptas illo ad, excepturi deleniti
        perspiciatis quos dolorum sed molestiae sint maxime porro optio magnam
        soluta iure recusandae tempore officiis quam doloribus, delectus
        quaerat! Quam enim illo voluptas odit. Libero ab aliquam incidunt
        officia cum doloremque blanditiis iure? Dolor officiis repellendus eum
        assumenda? Harum quaerat, facilis nesciunt delectus natus architecto
        sapiente obcaecati possimus debitis sit, enim illo ratione asperiores.
        Eos, fugit odio, eius quisquam error provident cum, officiis autem
        dolorum aut maxime? Dolorem et iusto, quam provident nesciunt nemo
        maxime neque, magnam atque, aperiam dolorum? Quisquam praesentium ullam
        velit. Dignissimos veritatis fuga minus facilis laudantium at dolor
        eaque quos, id, vero nihil ad nemo hic? Ullam blanditiis veritatis
        assumenda, ipsa optio quia nobis autem iusto beatae repellendus laborum
        facilis! Soluta, fugiat. Tenetur inventore doloremque minus odit facilis
        accusantium excepturi? Cupiditate iure laboriosam cumque veniam itaque
        nisi eveniet quaerat dicta, qui vel ullam sunt ipsum provident ab
        suscipit veritatis minima. Sapiente assumenda minus provident ducimus
        veniam quidem dolorum, natus quae sed, nemo ratione eligendi?
        Voluptatibus accusantium perspiciatis eligendi repellat exercitationem.
        Corrupti perferendis totam labore eligendi laboriosam repudiandae
        adipisci magnam iusto! Architecto blanditiis quisquam dolore quam odio,
        beatae non rerum distinctio illo sequi laboriosam voluptates, esse
        consectetur ratione magnam perferendis libero natus amet asperiores
        impedit! Numquam architecto dicta iste nesciunt esse. Cumque totam sequi
        beatae, optio quas ipsa nisi dolorum voluptatibus placeat itaque quidem
        delectus similique! Ex asperiores quam quia accusantium sint ipsa modi
        officia veniam eveniet, debitis, natus, itaque suscipit! Ullam obcaecati
        perspiciatis illum sequi cum, nobis fugiat? Commodi illum aut adipisci
        enim inventore. Optio fugiat facilis distinctio modi. Numquam a nesciunt
        dignissimos at, id officia consequatur vitae minima ipsam! Nihil sint
        labore quas quis, non provident in rem quidem? Cum sunt atque iste
        officia dolorum neque placeat animi fugit, ducimus dolore voluptas quas
        iure velit aspernatur praesentium! Sunt, in. Consequuntur tempore
        necessitatibus, ratione facilis eligendi fugiat iste enim deserunt quis
        perferendis nisi nam deleniti ab harum quas magni minus, natus facere
        alias doloremque expedita vitae. Voluptatem animi fugiat quam. Illo
        suscipit iste, aperiam asperiores officia, libero quidem voluptatum
        minima consequuntur et praesentium ex alias debitis molestiae aliquam,
        dignissimos sapiente vitae sequi totam delectus sunt cupiditate. Cum
        impedit blanditiis dignissimos. Quod tenetur magni explicabo dolorem
        dolorum. Et ab totam amet sapiente aut perferendis, commodi excepturi
        minus eius incidunt quod, rem repellat quia. Voluptatibus sint quaerat
        magnam, quibusdam odio harum quidem? Et iste sit eos quos placeat.
        Mollitia distinctio repellendus dolore laborum corrupti, recusandae
        ipsam beatae ex corporis aut modi autem eos laboriosam assumenda eum
        voluptates deserunt, veniam adipisci! Ullam, obcaecati? Earum impedit
        quia alias neque ducimus magni nisi magnam placeat aut molestias numquam
        hic veritatis officiis harum, dignissimos fuga mollitia? Ipsum
        exercitationem delectus debitis quibusdam laboriosam, incidunt sequi
        harum. Ex? Incidunt animi consequuntur, maiores dolorum rem suscipit.
        Voluptatem quasi alias, ab cupiditate ipsum quibusdam quas, reiciendis
        debitis unde incidunt similique exercitationem nostrum nemo? Praesentium
        non amet, suscipit quod sed quo. Officiis nemo nam obcaecati ducimus
        eius ut. Sit quibusdam repellendus tempore sunt, temporibus autem non
        omnis voluptas alias corporis nemo facere. Aperiam, a! Qui optio
        laudantium dolorem voluptates id assumenda? Minima ex sapiente,
        asperiores laborum expedita beatae odio voluptate quo maxime, vitae amet
        ipsam ullam. Adipisci, a, inventore pariatur et ea cupiditate molestiae
        aspernatur voluptatum ad dignissimos doloribus quo porro. Aliquam
        laudantium soluta delectus aut nulla, totam quo adipisci laborum iusto
        obcaecati, architecto labore tenetur distinctio odit error fuga corrupti
        cumque amet at quam debitis perspiciatis, aliquid quas? Veniam, maiores.
        Incidunt, ipsum eveniet quasi consequatur fuga laudantium voluptas
        veritatis neque vitae non magnam voluptatibus dignissimos quod sunt
        dolore maxime facilis cumque porro modi excepturi facere reprehenderit
        aliquam ipsam. Facilis, ipsum? Illum officiis pariatur qui velit a
        blanditiis eum consequatur in nostrum quasi dignissimos, ipsam autem ab
        alias nobis debitis sunt quam consequuntur eligendi? Ea incidunt, velit
        eligendi cum voluptatem similique. Magni voluptate consequuntur quisquam
        corporis minima suscipit excepturi architecto. Nihil, nostrum! Labore, a
        inventore numquam eligendi, dignissimos reiciendis dolor cum non
        repellat repudiandae odit adipisci eos molestias quos rerum ratione. Ut
        saepe a expedita non voluptatum eveniet quo cumque voluptates, nam,
        laudantium quisquam, corporis quia. Qui accusantium iure, eaque
        quibusdam suscipit fugiat vero possimus assumenda officiis! Sunt,
        voluptas! Dolore, ipsa. Maiores consequuntur voluptatibus voluptatem?
        Aut quo autem adipisci modi necessitatibus accusamus ab in harum amet
        tempora. Expedita necessitatibus, quidem cupiditate sint velit iusto
        earum officia voluptate natus unde, repudiandae quaerat. Corrupti vitae
        molestias beatae, incidunt ex illum sit nobis vel reprehenderit velit
        perspiciatis perferendis voluptatem a eius quos officia, error earum
        deleniti inventore. Iure, perspiciatis! Totam aliquam nihil numquam
        ipsam. Saepe reiciendis modi praesentium delectus eligendi corrupti
        asperiores dignissimos qui. Animi necessitatibus, inventore esse
        deserunt eos exercitationem mollitia odio repellat, officia itaque qui
        odit voluptas cumque, ut aliquam amet dolorem. Incidunt perferendis ad
        veritatis cum porro beatae eius velit recusandae soluta tenetur
        necessitatibus maiores commodi aperiam dolor illo, sint dolorem totam!
        Dignissimos corporis numquam rem quas nostrum ratione odio voluptas?
        Laborum voluptate nulla maiores aliquam, quisquam rerum nesciunt qui
        magnam quae odit consectetur eius iusto rem, vitae nihil velit
        voluptates molestias perferendis veniam tenetur, minima suscipit animi
        sed expedita. Velit. Alias hic nihil ducimus ad tenetur aliquam facilis
        officiis fugit sit. Quia accusamus possimus sint ipsum sequi rerum qui
        esse sit recusandae in vel expedita odio voluptate, commodi culpa quod?
        Aspernatur reiciendis, esse a suscipit aut molestias laboriosam,
        voluptas obcaecati fuga exercitationem nobis pariatur totam quasi, quam
        libero soluta vitae minus perspiciatis eius dignissimos voluptatem.
        Perspiciatis ipsa doloremque ipsum maxime! At non quae assumenda quaerat
        ipsa sequi ad, animi temporibus asperiores quisquam qui, cupiditate
        deserunt. Voluptatum saepe repellendus esse cumque, magni dignissimos
        iure nesciunt velit cum, voluptatibus enim quia obcaecati. Cupiditate
        commodi asperiores culpa consectetur sunt non doloribus, accusantium
        debitis molestias nihil magni pariatur obcaecati sequi sapiente nulla
        maiores sed quibusdam atque quod molestiae totam. Sint eum obcaecati
        nesciunt enim! Perspiciatis odio, harum mollitia repellendus repudiandae
        numquam provident dolorum sapiente, distinctio recusandae dignissimos
        tenetur, laborum sed ducimus quisquam odit quaerat. Incidunt dolorum
        nemo delectus ipsum tenetur autem dolor itaque laboriosam. Voluptatem,
        facere temporibus earum non alias magnam repellat expedita eaque, at sit
        sed dolore quis neque autem dicta iste molestiae quidem labore
        inventore. Amet beatae quod laboriosam maiores alias iure? Reiciendis
        eligendi exercitationem voluptate dolores earum consequuntur esse
        dignissimos, ipsam quia, alias sint incidunt necessitatibus eaque ipsa
        quaerat accusamus impedit at fuga blanditiis? Quas, eos. Voluptates esse
        sed sint error? Aliquam minima laboriosam necessitatibus quod ducimus
        consequuntur deserunt minus sunt error quia. Corporis eum aliquam
        voluptatem nesciunt provident. Enim esse corrupti quidem earum ex
        corporis rem itaque iste aspernatur doloremque! Ipsa vel, magni
        aspernatur vero culpa ea at laboriosam aliquam doloremque iste dolorem,
        quasi voluptate? Error deleniti exercitationem voluptatibus obcaecati
        minima, necessitatibus nemo quis. Dicta accusantium nisi unde iure
        sapiente. Veritatis dolorem labore dolor magni ducimus expedita ad non!
        Voluptate officia, possimus hic vel illum est quos nobis corporis?
        Minima ducimus possimus sit, et maxime error vel cupiditate excepturi
        fuga! Sint aut voluptas sunt itaque deleniti? Cumque nesciunt quaerat
        nemo sapiente porro sint vel repudiandae dolorum distinctio. Ut facere
        facilis aliquid enim nam nostrum, iure excepturi optio vel, aperiam
        dolore? Asperiores, facere id. Doloribus dolorem vero impedit qui ut
        cupiditate voluptate necessitatibus maxime earum alias sunt facere
        voluptatem deleniti optio architecto dolore suscipit a omnis quibusdam,
        sit eveniet est nemo. Temporibus, atque consequuntur est accusantium
        alias placeat nulla consectetur culpa officiis unde rerum quisquam
        incidunt. Voluptate eaque, repellat quisquam provident numquam, dolorum
        excepturi recusandae corrupti vitae incidunt officia omnis architecto?
        Commodi sed ullam voluptatibus cumque minus deserunt placeat nemo
        officiis odit laudantium nesciunt odio blanditiis est unde, fugit ipsum
        qui sit natus vero quas. Explicabo, dolores nostrum! Provident, esse
        eos! Perferendis aperiam et molestias debitis velit cum tempora. Ut unde
        ab explicabo libero a facilis eaque vitae aliquid, assumenda nihil
        adipisci ullam porro dolor, laboriosam iusto, natus velit ratione nobis.
        Tenetur nemo odio dolor ab consequuntur cupiditate eius quibusdam
        architecto et excepturi repellendus quaerat in commodi atque consectetur
        temporibus officia aliquam vero, incidunt sunt minus libero voluptates
        quasi beatae. Ipsa?
      </p>

      {showModal && modal}
    </div>
  );
}
export default ModalPage;
