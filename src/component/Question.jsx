import { ChevronDown } from 'lucide-react';
import React, { useState } from 'react';

function Question() {
  const [openFAQs, setOpenFAQs] = useState([]);

  const toggleFAQ = (index) => {
    setOpenFAQs(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  // FAQ data
  const faqs = [
    {
      question: "wash WALLETとは？",
      answer: (
        <>
          <p>洗車受付をスマートフォン上で行えるアプリです。サブスクリプションサービスの定額洗車チケット機能やプリペイドカード機能を使うとよりお得に洗車ができます。</p>
          <p className="mt-2">※サービス提供内容はご利用の店舗ごとに異なります。各店舗のサービス内容は店舗情報をご確認ください。</p>
        </>
      )
    },
    {
      question: "wash WALLETでできること",
      answer: (
        <>
          <p>以下のことが出来ます。</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>洗車受付</li>
            <li>定額洗車チケット、プリペイドカードの購入</li>
            <li>利用履歴の確認</li>
          </ul>
          <p className="mt-2">※サービス提供内容は、ご利用の店舗ごとに異なります。各店舗のサービス内容は店舗情報をご確認ください。</p>
        </>
      )
    },
    {
      question: "会員登録の方法について",
      answer: "当ページの登録方法をご確認ください。"
    },
    {
      question: "メールが届かない",
      answer: (
        <>
          <p>下記に該当する内容がないかご確認ください。</p>
          <ul className="mt-2 space-y-3">
            <li>
              <p className="font-medium">メールサーバの容量を超過して、受信できなくなっている。</p>
              <p className="text-sm text-gray-600">不要なメールを削除し、受信容量に余裕を作ってください。</p>
            </li>
            <li>
              <p className="font-medium">電波状況が悪く、受信できていない。</p>
              <p className="text-sm text-gray-600">電波の良い場所に移動してください。</p>
            </li>
            <li>
              <p className="font-medium">登録メールアドレスを間違えている。</p>
              <p className="text-sm text-gray-600">メールアドレスを正確に入力してください。</p>
            </li>
            <li>
              <p className="font-medium">〜@washwalletapp.comからのメールを受信しない設定になっている。</p>
              <p className="text-sm text-gray-600">メールの受信設定を確認し、「@washwalletapp.com」の受信設定をしてください。</p>
            </li>
          </ul>
          
          <div className="mt-4">
            <p className="font-medium">迷惑メール設定について</p>
            <p className="mt-1">各社設定方法が異なります。特にキャリアメールでご登録のお客様は、受信リストに「@washwalletapp.com」の受信設定をお願いいたします。</p>

            <p className="mt-2 text-sm">※一度、迷惑メールに分類されると、wash WALLETからメールが送信できなくなる場合がございます。設定を見直してもメールが受信されない場合は、お問い合わせフォームからお尋ねください。</p>
          </div>
        </>
      )
    },
    {
      question: "会員登録時にエラーが表示される",
      answer: (
        <>
          <p>入力内容に不備があった場合、エラーメッセージが表示されます。エラーメッセージの内容を確認し、修正を行ってください。</p>
          
          <div className="mt-4">
            <p className="font-medium">（1）よくある事業者コードのエラー</p>
            <div className="mt-2 pl-4 border-l-2 border-gray-300">
              <p className="font-medium">・入力した事業者コードは存在しません。</p>
              <p className="mt-1 text-sm">入力した事業者コードに間違いがあります。正しいコードをご入力ください。事業者コードが不明な場合は店舗にお尋ねください。</p>
            </div>
          </div>
          
          <div className="mt-4">
            <p className="font-medium">（2）よくあるメールアドレスのエラー</p>
            <div className="mt-2 pl-4 border-l-2 border-gray-300">
              <p className="font-medium">・メールアドレスの形式が正しくありません。</p>
              <p className="mt-1 text-sm">入力されたアドレスの形式が正しくありません。以下の内容を確認の上、再度ご入力いただくか別のアドレスで登録をお願いいたします。</p>
              
              <p className="mt-3 font-medium">・全角文字が含まれている。</p>
              <p className="mt-1 text-sm">特に「@」をご確認ください</p>
              
              <p className="mt-3 font-medium">・利用できない形式のアドレスである。</p>
              <p className="mt-1 text-sm">例：○○○.@washwalletapp.com、.○○○@washwalletapp.com、○○..○@washwalletapp.comなど、ピリオドの位置に問題がある。<br />！、？、♯など利用できない記号が含まれている。</p>
              
              <p className="mt-3 font-medium">・入力したメールは存在しました。</p>
              <p className="mt-1 text-sm">入力したアドレスでアカウントが作成済みです。現在アカウントをお持ちの方はログインを行ってください。退会済みのアドレスで再度アカウントを作成することはできません。再登録される方はお問い合わせフォームより申し出てください。</p>
            </div>
          </div>
        </>
      )
    },
    {
      question: "認証コードとは",
      answer: (
        <>
          <p>認証コードとは、本人確認メール内の「本登録を完了する」が正常に作動しなかった場合に利用する8桁の登録用コードを指します。</p>
          <p className="mt-2">会員登録本人確認メール内に記載されています。</p>
          <p className="mt-2">ログイン時に認証コード入力画面が表示されたら入力してください。</p>
        </>
      )
    },
    {
      question: "会員登録が完了できない",
      answer: (
        <>
          <p>以下をご確認の上、解決しなかった場合はお問い合わせフォームよりお問い合わせ下さい。</p>
          
          <div className="mt-4">
            <p className="font-medium">（1）メールが届かない</p>
            <p className="mt-1">FAQの「メールが届かない」をご確認の上、受信設定を行ってください。受信設定を見直してもメールが届かない場合は、登録したいメールアドレスをご記入の上、お問い合わせフォームからお問い合わせください。</p>
          </div>
          
          <div className="mt-4">
            <p className="font-medium">（2）「本登録を完了する」をタップしても登録が完了しない</p>
            <p className="mt-1">Safari、Google以外のブラウザからリンクを開いた場合、登録が完了しないことがあります。認証コードを利用し、登録処理を実施してください。</p>
            
            <ol className="mt-3 space-y-2 list-decimal pl-5">
              <li>
                <p>アプリを起動し「ログイン」をタップ</p>
                <p className="text-sm text-gray-600">※メール送信画面の場合は左上の×ボタンをタップし、ログイン画面へ移動してください。</p>
              </li>
              <li>
                <p>メールアドレス、パスワードを入力</p>
              </li>
              <li>
                <p>本人確認メールに記載の認証コードを入力し、「ログイン」をタップ</p>
              </li>
            </ol>
          </div>
        </>
      )
    },
    {
      question: "パスワードを忘れた",
      answer: (
        <>
          <p>ログイン画面にある、「パスワードを忘れましたか？」から再発行を行ってください。</p>
        </>
      )
    },
    {
      question: "ログインできない",
      answer: (
        <>
          <p>エラーメッセージの内容、表示された内容をご確認の上、再度お試しください。</p>
          
          <div className="mt-4">
            <p className="font-medium">〈よくある事例〉</p>
            <div className="mt-2 pl-4 border-l-2 border-gray-300">
              <p className="font-medium">メールアドレスまたはパスワードが正しくありません。</p>
              <p className="mt-1 text-sm">入力内容が間違っていないかご確認ください。もしパスワードが分からない場合はログイン画面の「パスワードを忘れましたか？」から再発行を行ってください。</p>
              
              <p className="mt-3 font-medium">認証コードを聞かれた。</p>
              <p className="mt-1 text-sm">会員登録が正常に完了しなかった場合に表示されます。会員登録本人確認メール内に記載の認証コードをご入力ください。</p>
              
              <p className="mt-3 font-medium">引き継ぎコードを聞かれた。</p>
              <p className="mt-1 text-sm">使用している端末と異なる端末でログインする際に表示されます。機種変更される方は、よくあるご質問の「機種変更について」をご確認いただき、引き継ぎコードの発行を行ってください。</p>
            </div>
          </div>
        </>
      )
    },
    {
      question: "退会方法が分からない",
      answer: (
        <>
          <p>「アカウント設定」を開き、「退会はこちら」を選択してください。</p>
        </>
      )
    },
    {
      question: "退会時の定額チケットの有効期限・プリペイドカードの残高の扱いについて",
      answer: (
        <>
          <p>サービスの特性上、返金は受け付けておりません。定額洗車チケットの期限が終わってから、またはプリペイドカードの残高を使い切ってからサービスの退会を行ってください。</p>
        </>
      )
    },
    {
      question: "クレジットカード情報の登録・変更",
      answer: (
        <>
          <ol className="list-decimal pl-5 mt-2 space-y-1">
            <li>メニューを開く。</li>
            <li>「お支払い情報」「クレジットカード」を選択する。</li>
            <li>カード情報を入力し、「保存する」を選択する。</li>
          </ol>
          
          <div className="mt-4">
            <p className="font-medium">登録するクレジットカード情報について</p>
            <ul className="mt-2 space-y-2 list-disc pl-5">
              <li>カード番号はハイフンなしで入力してください。</li>
              <li>カードの桁数が16桁未満の場合、先頭に「0」を入れて16桁にしてください。</li>
              <li>セキュリティコードはカード裏面の署名部の上に記載されている3桁の数字です。ほとんどのカードは上記に該当しますが、一部のクレジットカードは表面のカード番号上部に記載されている4桁の数字を指す場合があります。ご不明な場合はカード会社にお問い合わせください。</li>
            </ul>
          </div>
        </>
      )
    },
    {
      question: "クレジットカード登録時にエラーが表示される",
      answer: (
        <>
          <p>以下の可能性が考えられます。</p>
          <ul className="mt-2 space-y-2 list-disc pl-5">
            <li>入力した情報に誤りがある。</li>
            <li>有効期限が切れている。</li>
            <li>有効期限が誤って入力している。</li>
            <li>非対応ブランド（JCB、VISA、MasterCard、AMEX、Diners以外）のクレジットカードである。</li>
            <li>利用限度額を超えている。</li>
          </ul>
          <p className="mt-2">上記をご確認のうえ、解決できなかった場合は各クレジットカード発行会社へお問い合わせください。</p>
        </>
      )
    },
    {
      question: "PayPay決済の方法",
      answer: (
        <>
          <ol className="list-decimal pl-5 mt-2 space-y-2">
            <li>洗車受付を行う</li>
            <li>支払い方法選択画面で「PayPay(残高払い)」を選択する。</li>
            <li>PayPay決済へ進み、支払画面で「支払う」を選択する。</li>
            <li>支払いが完了し、wash WALLETへ戻る。</li>
          </ol>
          
          <div className="mt-4">
            <p className="font-medium">※注意事項</p>
            <ul className="mt-2 space-y-2 list-disc pl-5">
              <li>PayPay決済を終えるまでPayPay決済画面を閉じないでください。お支払いが完了していない場合、洗車受付が完了しません。</li>
              <li>PayPay残高払いからのお支払いのみとなります。事前にチャージした状態での受付をおすすめします。</li>
              <li>PayPay決済をご利用の場合は、事前にPayPayへの登録・チャージが必要です。</li>
            </ul>
          </div>
        </>
      )
    },
    {
      question: "PayPayで決済を終える前にPayPayアプリを閉じてしまった・エラーにより決済ができなかった。",
      answer: (
        <>
          <p>PayPayで決済が出来なかった場合は一度洗車受付をキャンセルし、再度受付操作を行ってください。</p>
        </>
      )
    },
    {
      question: "PayPayからwashWALLETへ戻らない",
      answer: (
        <>
          <p>PayPayで決済が出来なかった場合は一度洗車受付をキャンセルし、再度受付操作を行ってください。</p>
        </>
      )
    },
    {
      question: "「PayPayで決済はお済ですか？」という表示が出た",
      answer: (
        <>
          <p>この表示が出ている場合、以下の原因が考えられます。</p>
          
          <div className="mt-3">
            <p className="font-medium">PayPayで決済が完了していない</p>
            <p className="mt-1 text-sm">決済が完了していない場合は、「洗車メニューを変更する」から再度洗車受付を行ってください。</p>
          </div>
          
          <div className="mt-3">
            <p className="font-medium">PayPayで決済が完了している。</p>
            <p className="mt-1 text-sm">PayPayで決済が完了していても、こちらの表示が出るケースがございます。決済が完了している場合はそのまま決済機にQRコードをかざしてください。</p>
          </div>
        </>
      )
    },
    {
      question: "PayPayアプリ側で「注文準備中」の文字が出た",
      answer: (
        <>
          <p>PayPayで短時間に複数回、支払いボタンを押した場合に表示されます。</p>
          <p className="mt-2">重複決済防止のため、支払画面を閉じて5分以内はお支払い手続きへお進み頂けません。</p>
          <p className="mt-2">お手数ですが、一度洗車受付をキャンセルし、時間をおいてから再度洗車受付を行ってください。</p>
        </>
      )
    },
    {
      question: "PayPay決済の支払期限について",
      answer: (
        <>
          <p>PayPay決済の支払い期限は洗車受付完了から5分です。</p>
          <p className="mt-2">支払期限を過ぎた場合は洗車受付をキャンセルし、再度洗車受付を行ってください。</p>
        </>
      )
    },
    {
      question: "領収書の発行について",
      answer: (
        <>
          <p>領収書は決済完了後にアカウントのメールアドレスに送信されます。</p>
          <p className="mt-2">紙の領収書が必要な場合は、メール本文を印刷してご利用ください。</p>
          
          <div className="mt-4">
            <p className="font-medium">※注意事項</p>
            <ul className="mt-2 space-y-1 list-disc pl-5">
              <li>領収書メールを受信できない場合はHTMLメールを受信できるように設定するか、よくあるご質問の「会員登録・アカウントについて」の項目から「メールが届かない」をご参照ください。</li>
              <li>領収書の再発行はできません。</li>
            </ul>
          </div>
        </>
      )
    },
    {
      question: "事業者コードが分からない",
      answer: (
        <>
          <p>ご利用を希望される店舗にお問い合わせください。</p>
        </>
      )
    },
    {
      question: "定額チケットとは",
      answer: (
        <>
          <p>1ヵ月単位で利用できる定額洗車のサービスです。定額洗車チケットを購入すると毎月自動で決済され、1ヵ月間洗車利用ができます。</p>
          <p className="mt-2">※金額と利用可能なメニューは店舗やコースによって異なります。</p>
          <p className="mt-2">※定額洗車チケットのご利用はご購入時に登録いただいた車両に限らせていただきます。</p>
        </>
      )
    },
    {
      question: "登録している自動車ナンバーを変更したい",
      answer: (
        <>
          <p>不正利用防止のため、変更はできない仕様です。申し訳ございませんが、お車を買い替えるなどでナンバーが変更になった際は、一度定額洗車チケットを解約し、再度お買い求めください。</p>
        </>
      )
    },
    {
      question: "定額洗車チケットを解約したい",
      answer: (
        <>
          <p>以下の手順で解約が可能です。</p>
          <p className="mt-1">解約後、有効期限内は引き続き利用可能です。</p>
          
          <ol className="list-decimal pl-5 mt-3 space-y-2">
            <li>ホーム画面内の定額洗車チケット右上の「i」マークを選択</li>
            <li>「チケットの解約はこちら」を選択</li>
            <li>利用規約、個人情報保護方針を確認し、チェックボックスにチェックを入れ、「解約する」を選択</li>
          </ol>
          
          <p className="mt-3 text-sm">※有効期限当日の22:00〜23:59は解約できません。</p>
          <p className="text-sm">　毎月、チケット期限日の22:00に翌月分の料金が課金されます。</p>
          <p className="text-sm">　解約される際はチケット期限日の午後10時までに行ってください。</p>
        </>
      )
    },
    {
      question: "返金してほしい",
      answer: (
        <>
          <p>商品の性質上返金できません。</p>
        </>
      )
    },
    {
      question: "機種変更する場合の引継ぎ方法",
      answer: (
        <>
          <ol className="list-decimal pl-5 mt-2 space-y-2">
            <li>メニュー欄「機種・端末変更のお手続き」を選択。</li>
            <li>「引き継ぎコードを発行」を選択。引き継ぎコードが記載されたメールが届く。</li>
            <li>新しい端末にwash WALLETをダウンロードする。</li>
            <li>新しい端末でアプリを起動し、「ログイン」を選択する。</li>
            <li>メールアドレス、パスワードを入力する。</li>
            <li>引き継ぎコードを入力する。引き継ぎが完了する。</li>
          </ol>
          
          <p className="mt-3 text-sm">※引き継ぎコードの有効期限は2日間です。機種変更の手続きをしてから5日間は新しい端末への変更が出来ません。引き継ぎを行ったあと、旧端末での利用が出来なくなります。機種変更前にアカウント設定を確認し、新しい端末でも受信できるメールアドレスに変更してください。</p>
        </>
      )
    },
    {
      question: "その他の質問",
      answer: (
        <>
          <p><a href="https://washwalletapp.com/" className="text-blue-600 hover:underline">https://washwalletapp.com/</a>のよくあるご質問の欄をご確認ください。</p>
        </>
      )
    }
  ];
  
  // FAQ Accordion Component
  const FAQAccordion = ({ faq, isOpen, onClick }) => {
    return (
      <div  className="border-b border-gray-200 last:border-0">
        <button
          className="w-full py-5 px-4 sm:px-6 flex justify-between items-center hover:bg-gray-50 transition-colors duration-150"
          onClick={onClick}
        >
          <span className="text-left text-base sm:text-lg font-medium text-gray-900">{faq.question}</span>
          <ChevronDown 
            className={`w-5 h-5 text-gray-500 transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          />
        </button>
        <div 
          className={`overflow-hidden transition-all duration-200 ease-in-out ${isOpen ? 'max-h-[2000px]' : 'max-h-0'}`}
        >
          <div className="p-4 sm:p-6 text-gray-600 text-sm sm:text-base bg-gray-50">{faq.answer}</div>
        </div>
      </div>
    );
  };

  return (
    <div id='faq' className="bg_mint py-8 px-4 sm:py-16">
      <div className="pt-8 sm:pt-8 max-w-3xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-8">よくあるご質問</h2>
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          {faqs.map((faq, index) => (
            <FAQAccordion
              key={index}
              faq={faq}
              isOpen={openFAQs.includes(index)}
              onClick={() => toggleFAQ(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Question;