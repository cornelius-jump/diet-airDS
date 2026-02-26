import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import"./index-yBjzXJbu.js";function n({opponentLogo:B,opponentName:u,date:E,state:t,featuredPrice:k,offerCount:a,onTopClick:m,onBottomClick:R}){const p=t==="featured-only"||t==="featured-and-others",f=t==="featured-and-others"||t==="no-featured-offers",q=["event-row-top",p?"surface-section":""].filter(Boolean).join(" "),F=["event-row-bottom",f?"surface-section":""].filter(Boolean).join(" "),A=()=>t==="featured-only"||t==="featured-and-others"?e.jsx("div",{className:"trailing trailing-gap-lg",children:e.jsx("button",{type:"button",className:"btn btn-primary btn-100",onClick:m,children:k})}):t==="sold-out"?e.jsx("div",{className:"trailing trailing-gap-sm",children:e.jsx("span",{className:"labelBold30 text-secondary",children:"Sold Out"})}):t==="coming-soon"?e.jsx("div",{className:"trailing trailing-gap-sm",children:e.jsx("span",{className:"labelBold20 text-interactive-tertiary event-row-coming-soon",children:"Coming Soon"})}):null,_=t==="featured-and-others"||t==="no-featured-offers",W=t==="featured-and-others"?`${a??0} Additional Offer${(a??0)!==1?"s":""}`:`${a??0} Offer${(a??0)!==1?"s":""} Available`;return e.jsxs("div",{className:"event-row",children:[e.jsx("div",{className:q,children:e.jsxs("div",{className:`list-row${p?"":" not-tappable"}`,onClick:p?m:void 0,children:[e.jsx("div",{className:"leading leading-gap-sm",children:e.jsx("img",{className:"event-row-logo",src:B,alt:u})}),e.jsx("div",{className:"list-row-content",children:e.jsxs("div",{className:"list-row-text-pair",children:[e.jsx("span",{className:"event-row-label",children:u}),e.jsx("span",{className:"event-row-sublabel text-secondary",children:E})]})}),A()]})}),_&&e.jsx("div",{className:F,onClick:f?R:void 0,children:e.jsxs("div",{className:"list-row",children:[e.jsx("div",{className:"list-row-content",children:e.jsx("div",{className:"list-row-text-pair",children:e.jsx("span",{className:"labelBold30 text-interactive-tertiary",children:W})})}),e.jsx("div",{className:"trailing trailing-gap-xs",children:e.jsx("span",{className:"icon icon-200","aria-hidden":"true",children:"arrow_drop_down"})})]})})]})}n.__docgenInfo={description:"",methods:[],displayName:"EventRow",props:{opponentLogo:{required:!0,tsType:{name:"string"},description:"Opponent logo URL"},opponentName:{required:!0,tsType:{name:"string"},description:"Opponent team name"},date:{required:!0,tsType:{name:"string"},description:'Event date string (e.g. "Tuesday, Oct 8 · 7 PM")'},state:{required:!0,tsType:{name:"union",raw:`| 'featured-only'
| 'featured-and-others'
| 'no-featured-offers'
| 'sold-out'
| 'coming-soon'`,elements:[{name:"literal",value:"'featured-only'"},{name:"literal",value:"'featured-and-others'"},{name:"literal",value:"'no-featured-offers'"},{name:"literal",value:"'sold-out'"},{name:"literal",value:"'coming-soon'"}]},description:"Offer state"},featuredPrice:{required:!1,tsType:{name:"string"},description:'Featured offer price label (e.g. "$19+") — used in featured states'},offerCount:{required:!1,tsType:{name:"number"},description:"Number of additional/available offers — used in featured-and-others and no-featured-offers"},onTopClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"onClick for the top section (featured-only, featured-and-others)"},onBottomClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"onClick for the bottom section (featured-and-others, no-featured-offers)"}}};const o="https://placehold.co/48x48/cccccc/999999?text=OPP",z={title:"Components/EventRow",component:n,parameters:{layout:"padded"}},r={args:{opponentLogo:o,opponentName:"Portland Marmots",date:"Tuesday, Oct 8 · 7 PM",state:"featured-only",featuredPrice:"$19+"}},s={args:{opponentLogo:o,opponentName:"Charlotte Bullfrogs",date:"Thursday, Oct 10 · 7 PM",state:"featured-and-others",featuredPrice:"$21+",offerCount:3}},d={args:{opponentLogo:o,opponentName:"Miami Geckos",date:"Wednesday, Oct 16 · 7 PM",state:"no-featured-offers",offerCount:3}},i={args:{opponentLogo:o,opponentName:"Omaha Otters",date:"Tuesday, Oct 22 · 7 PM",state:"sold-out"}},c={args:{opponentLogo:o,opponentName:"Portland Marmots",date:"Saturday, Oct 26 · 7 PM",state:"coming-soon"}},l={render:()=>e.jsxs("div",{className:"event-row-list",children:[e.jsx(n,{opponentLogo:o,opponentName:"Portland Marmots",date:"Tue, Oct 8 · 7 PM",state:"featured-only",featuredPrice:"$19+"}),e.jsx(n,{opponentLogo:o,opponentName:"Charlotte Bullfrogs",date:"Thu, Oct 10 · 7 PM",state:"featured-and-others",featuredPrice:"$21+",offerCount:3}),e.jsx(n,{opponentLogo:o,opponentName:"Miami Geckos",date:"Wed, Oct 16 · 7 PM",state:"no-featured-offers",offerCount:3}),e.jsx(n,{opponentLogo:o,opponentName:"Omaha Otters",date:"Tue, Oct 22 · 7 PM",state:"sold-out"}),e.jsx(n,{opponentLogo:o,opponentName:"Portland Marmots",date:"Sat, Oct 26 · 7 PM",state:"coming-soon"})]})};var g,O,h;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    opponentLogo: LOGO,
    opponentName: 'Portland Marmots',
    date: 'Tuesday, Oct 8 · 7 PM',
    state: 'featured-only',
    featuredPrice: '$19+'
  }
}`,...(h=(O=r.parameters)==null?void 0:O.docs)==null?void 0:h.source}}};var v,N,x;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    opponentLogo: LOGO,
    opponentName: 'Charlotte Bullfrogs',
    date: 'Thursday, Oct 10 · 7 PM',
    state: 'featured-and-others',
    featuredPrice: '$21+',
    offerCount: 3
  }
}`,...(x=(N=s.parameters)==null?void 0:N.docs)==null?void 0:x.source}}};var y,P,L;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    opponentLogo: LOGO,
    opponentName: 'Miami Geckos',
    date: 'Wednesday, Oct 16 · 7 PM',
    state: 'no-featured-offers',
    offerCount: 3
  }
}`,...(L=(P=d.parameters)==null?void 0:P.docs)==null?void 0:L.source}}};var M,j,w;i.parameters={...i.parameters,docs:{...(M=i.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    opponentLogo: LOGO,
    opponentName: 'Omaha Otters',
    date: 'Tuesday, Oct 22 · 7 PM',
    state: 'sold-out'
  }
}`,...(w=(j=i.parameters)==null?void 0:j.docs)==null?void 0:w.source}}};var b,T,C;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    opponentLogo: LOGO,
    opponentName: 'Portland Marmots',
    date: 'Saturday, Oct 26 · 7 PM',
    state: 'coming-soon'
  }
}`,...(C=(T=c.parameters)==null?void 0:T.docs)==null?void 0:C.source}}};var S,G,$;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <div className="event-row-list">
      <EventRow opponentLogo={LOGO} opponentName="Portland Marmots" date="Tue, Oct 8 · 7 PM" state="featured-only" featuredPrice="$19+" />
      <EventRow opponentLogo={LOGO} opponentName="Charlotte Bullfrogs" date="Thu, Oct 10 · 7 PM" state="featured-and-others" featuredPrice="$21+" offerCount={3} />
      <EventRow opponentLogo={LOGO} opponentName="Miami Geckos" date="Wed, Oct 16 · 7 PM" state="no-featured-offers" offerCount={3} />
      <EventRow opponentLogo={LOGO} opponentName="Omaha Otters" date="Tue, Oct 22 · 7 PM" state="sold-out" />
      <EventRow opponentLogo={LOGO} opponentName="Portland Marmots" date="Sat, Oct 26 · 7 PM" state="coming-soon" />
    </div>
}`,...($=(G=l.parameters)==null?void 0:G.docs)==null?void 0:$.source}}};const D=["FeaturedOnly","FeaturedAndOthers","NoFeaturedOffers","SoldOut","ComingSoon","AllStates"];export{l as AllStates,c as ComingSoon,s as FeaturedAndOthers,r as FeaturedOnly,d as NoFeaturedOffers,i as SoldOut,D as __namedExportsOrder,z as default};
