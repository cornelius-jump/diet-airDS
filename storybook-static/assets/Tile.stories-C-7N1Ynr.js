import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{B as f}from"./Button-Beqz6_Me.js";import{T as v}from"./Tag-BctVKyBN.js";import"./index-yBjzXJbu.js";function n({visual:x,info:h,tag:l,tappable:a=!1,onClick:s}){const y=["tile",a?"surface-card scale-700":""].filter(Boolean).join(" ");return e.jsxs("div",{className:y,onClick:a?s:void 0,role:a?"button":void 0,tabIndex:a?0:void 0,onKeyDown:a?i=>{(i.key==="Enter"||i.key===" ")&&(i.preventDefault(),s==null||s())}:void 0,children:[x,l&&e.jsx("div",{className:"tile-tag",children:l}),e.jsx("div",{className:"tile-info",children:h})]})}n.__docgenInfo={description:"",methods:[],displayName:"Tile",props:{visual:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Visual header content (image, matchup, logo block, etc.)"},info:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Info section content (text pair, price, button, etc.)"},tag:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Optional frosted tag overlaid on top-left of visual header"},tappable:{required:!1,tsType:{name:"boolean"},description:`When true, the tile itself is the tap target (no inner button).
Adds surface-card scale-700 classes for hover/press interaction.`,defaultValue:{value:"false",computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"onClick handler (use only when tappable is true)"}}};const T={title:"Components/Tile",component:n,parameters:{layout:"padded"}},t={render:()=>e.jsx("div",{style:{maxWidth:"280px"},children:e.jsx(n,{visual:e.jsx("div",{style:{height:"140px",background:"var(--neutral-100)",display:"flex",alignItems:"center",justifyContent:"center"},children:e.jsx("span",{className:"icon icon-500 text-secondary",children:"sports_basketball"})}),info:e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"card-text-pair",children:[e.jsx("span",{className:"labelBold30",children:"Portland Marmots"}),e.jsx("span",{className:"labelRegular10 text-secondary",children:"Sat Mar 15 · 7:30 PM"})]}),e.jsx("span",{className:"display400",children:"From $45"}),e.jsx(f,{variant:"primary",size:"small",fill:!0,children:"Buy tickets"})]})})})},r={render:()=>e.jsx("div",{style:{maxWidth:"280px"},children:e.jsx(n,{visual:e.jsx("div",{style:{height:"140px",background:"var(--neutral-100)",display:"flex",alignItems:"center",justifyContent:"center"},children:e.jsx("span",{className:"icon icon-500 text-secondary",children:"sports_basketball"})}),tag:e.jsx(v,{children:"Tonight"}),info:e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"card-text-pair",children:[e.jsx("span",{className:"labelBold30",children:"Portland Marmots"}),e.jsx("span",{className:"labelRegular10 text-secondary",children:"Tonight · 7:30 PM"})]}),e.jsx("span",{className:"display400",children:"From $45"})]}),tappable:!0})})};var o,c,d;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => <div style={{
    maxWidth: '280px'
  }}>
      <Tile visual={<div style={{
      height: '140px',
      background: 'var(--neutral-100)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
            <span className="icon icon-500 text-secondary">sports_basketball</span>
          </div>} info={<>
            <div className="card-text-pair">
              <span className="labelBold30">Portland Marmots</span>
              <span className="labelRegular10 text-secondary">Sat Mar 15 · 7:30 PM</span>
            </div>
            <span className="display400">From $45</span>
            <Button variant="primary" size="small" fill>Buy tickets</Button>
          </>} />
    </div>
}`,...(d=(c=t.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var p,m,u;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <div style={{
    maxWidth: '280px'
  }}>
      <Tile visual={<div style={{
      height: '140px',
      background: 'var(--neutral-100)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
            <span className="icon icon-500 text-secondary">sports_basketball</span>
          </div>} tag={<Tag>Tonight</Tag>} info={<>
            <div className="card-text-pair">
              <span className="labelBold30">Portland Marmots</span>
              <span className="labelRegular10 text-secondary">Tonight · 7:30 PM</span>
            </div>
            <span className="display400">From $45</span>
          </>} tappable />
    </div>
}`,...(u=(m=r.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};const R=["Default","WithTag"];export{t as Default,r as WithTag,R as __namedExportsOrder,T as default};
