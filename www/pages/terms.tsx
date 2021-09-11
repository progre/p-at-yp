import { Container, Link } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import NextLink from 'next/link';
import Head from 'next/head';
import Footer from '../components/Footer';

export default function terms(): JSX.Element {
  return (
    <Container maxWidth="sm">
      <Head>
        <title>利用規約 - p@ YP</title>
      </Head>
      <CssBaseline />
      <Toolbar style={{ paddingLeft: 0, height: 80 }}>
        <Button color="inherit" style={{ textTransform: 'initial' }}>
          <Typography variant="h6" color="inherit">
            <NextLink href="/" passHref>
              <Link>p@ YP</Link>
            </NextLink>
          </Typography>
        </Button>
      </Toolbar>

      <div>
        <h1>利用規約</h1>
        <p>
          この利用規約（以下，「本規約」といいます。）は，このウェブサイトの管理者（以下，「管理者」といいます。）がこのウェブサイト上で提供するサービス（以下，「本サービス」といいます。）の利用条件を定めるものです。本サービスを利用する全ての方（以下，「ユーザー」といいます。）には，本規約に従って，本サービスをご利用いただきます。
        </p>
        <h2>第1条（適用）</h2>
        <ol>
          <li>
            本規約は，ユーザーと管理者との間の本サービスの利用に関わる一切の関係に適用されるものとします。
          </li>
          <li>
            管理者は本サービスに関し，本規約のほか，ご利用にあたってのルール等，各種の定め（以下，「個別規定」といいます。）をすることがあります。これら個別規定はその名称のいかんに関わらず，本規約の一部を構成するものとします。
          </li>
          <li>
            本規約の規定が前条の個別規定の規定と矛盾する場合には，個別規定において特段の定めなき限り，個別規定の規定が優先されるものとします。
          </li>
        </ol>
        <h2>第2条（禁止事項）</h2>
        <p>
          ユーザーは，本サービスの利用にあたり，以下の行為をしてはなりません。
        </p>
        <ol>
          <li>法令または公序良俗に違反する行為</li>
          <li>犯罪行為に関連する行為</li>
          <li>
            本サービスの内容等，本サービスに含まれる著作権，商標権ほか知的財産権を侵害する行為
          </li>
          <li>
            管理者，ほかのユーザー，またはその他第三者のサーバーまたはネットワークの機能を破壊したり，妨害したりする行為
          </li>
          <li>管理者のサービスの運営を妨害するおそれのある行為</li>
          <li>不正アクセスをし，またはこれを試みる行為</li>
          <li>他のユーザーに関する個人情報等を収集または蓄積する行為</li>
          <li>不正な目的を持って本サービスを利用する行為</li>
          <li>
            本サービスの他のユーザーまたはその他の第三者に不利益，損害，不快感を与える行為
          </li>
          <li>他のユーザーに成りすます行為</li>
          <li>
            管理者のサービスに関連して，反社会的勢力に対して直接または間接に利益を供与する行為
          </li>
          <li>その他，管理者が不適切と判断する行為</li>
        </ol>
        <h2>第3条（本サービスの提供の停止等）</h2>
        <ol>
          <li>
            管理者は，以下のいずれかの事由があると判断した場合，ユーザーに事前に通知することなく本サービスの全部または一部の提供を停止または中断することができるものとします。
            <ol>
              <li>
                本サービスにかかるコンピュータシステムの保守点検または更新を行う場合
              </li>
              <li>
                地震，落雷，火災，停電または天災などの不可抗力により，本サービスの提供が困難となった場合
              </li>
              <li>コンピュータまたは通信回線等が事故により停止した場合</li>
              <li>その他，管理者が本サービスの提供が困難と判断した場合</li>
            </ol>
          </li>
          <li>
            管理者は，本サービスの提供の停止または中断により，ユーザーまたは第三者が被ったいかなる不利益または損害についても，一切の責任を負わないものとします。
          </li>
        </ol>
        <h2>第4条（利用制限）</h2>
        <ol>
          <li>
            管理者は，ユーザーが以下のいずれかに該当する場合には，事前の通知なく，ユーザーに対して，本サービスの全部もしくは一部の利用を制限することができるものとします。
            <ol>
              <li>本規約のいずれかの条項に違反した場合</li>
              <li>管理者が本サービスの利用を適当でないと判断した場合</li>
            </ol>
          </li>
          <li>
            管理者は，本条に基づき管理者が行った行為によりユーザーに生じた損害について，一切の責任を負いません。
          </li>
        </ol>
        <h2>第5条（保証の否認および免責事項）</h2>
        <ol>
          <li>
            管理者は，本サービスに事実上または法律上の瑕疵（安全性，信頼性，正確性，完全性，有効性，特定の目的への適合性，セキュリティなどに関する欠陥，エラーやバグ，権利侵害などを含みます。）がないことを明示的にも黙示的にも保証しておりません。
          </li>
          <li>
            管理者は，本サービスに起因してユーザーに生じたあらゆる損害について一切の責任を負いません。
          </li>
          <li>
            管理者は，本サービスに関して，ユーザーと他のユーザーまたは第三者との間において生じた取引，連絡または紛争等について一切責任を負いません。
          </li>
          <li>
            ユーザーは，本サービスを利用して公開した掲載情報（ライブストリーミングの識別子，IPアドレス，URL，説明文，その他の情報）およびライブストリーミングの内容について，全ての責任を負うものとします。
          </li>
        </ol>
        <h2>第6条（サービス内容の変更等）</h2>
        <p>
          管理者は，ユーザーに通知することなく，本サービスの内容を変更しまたは本サービスの提供を中止することができるものとし，これによってユーザーに生じた損害について一切の責任を負いません。
        </p>
        <h2>第7条（利用規約の変更）</h2>
        <p>
          管理者は，必要と判断した場合には，ユーザーに通知することなくいつでも本規約を変更することができるものとします。なお，本規約の変更後，本サービスの利用を開始した場合には，当該ユーザーは変更後の規約に同意したものとみなします。
        </p>
        <h2>第8条（権利義務の譲渡の禁止）</h2>
        <p>
          ユーザーは，管理者の書面による事前の承諾なく，利用契約上の地位または本規約に基づく権利もしくは義務を第三者に譲渡し，または担保に供することはできません。
        </p>
        <h2>第9条（準拠法・裁判管轄）</h2>
        <ol>
          <li>本規約の解釈にあたっては，日本法を準拠法とします。</li>
          <li>
            本サービスに関して紛争が生じた場合には，札幌地方裁判所を専属的合意管轄とします。
          </li>
        </ol>
        <p>以上</p>
      </div>
      <Footer />
    </Container>
  );
}
