const { registerBlockType } = wp.blocks;
const { RichText } = wp.editor;



registerBlockType('lh-theme/lh-phone', {
    title: 'Telefon',
    description: 'Telefonblock',
    icon: 'shield',
    category: 'common',

    
    attributes: {
        tel_num: {
            type: 'string'
        } ,
        tel_name: {
            type: 'string'
        },
        tel_href: {
            type: 'string'
        },
    },

    edit: function ({ attributes, setAttributes, className, isSelected }) {
        //const updateDate;
        function updateTelName(event) {
            setAttributes( { tel_name: event.target.value } );
        }
        function updateTelNum(event) {
            setAttributes( { tel_num: event.target.value } );
        }
        function updateTelHref(event) {
            setAttributes( { tel_href: event.target.value } );
        }


        return ([
            <div style={{display:" flex", flexDirection: "column"}}>
                <label>Tel. Label</label>
                <input type="text" value={attributes.tel_name} onChange={ updateTelName }></input>  
                <label>Nummer</label>
                <input type="text" value={attributes.tel_num} onChange={ updateTelNum }></input>  
                <label>href</label>
                <input type="text" value={attributes.tel_href} onChange={ updateTelHref }></input>  
            </div>
        ]);
    },

    save: function( { attributes } ) {

        return (
            <div className="kontakt__phone">
                <a href={'mail:' + attributes.tel_href}>
                    <p className="adress__name">{ attributes.tel_name }</p>
                    <p className="adress">{ attributes.tel_num }</p>
                </a>      
            </div>
        );
    }
});


registerBlockType('lh-theme/lh-mail', {
    title: 'Email',
    description: 'Emailblock',
    icon: 'shield',
    category: 'common',

    
    attributes: {
        mail_name: {
            type: 'string'
        },
        mail_ad: {
            type: 'string'
        },
        mail_href: {
            type: 'string'
        },
    },

    edit: function ({ attributes, setAttributes, className, isSelected }) {
        //const updateDate;
        function updateMailName(event) {
            setAttributes( { mail_name: event.target.value } );
        }
        function updateMailAd(event) {
            setAttributes( { mail_ad: event.target.value } );
        }
        function updateMailHref(event) {
            setAttributes( { mail_href: event.target.value } );
        }


        return ([
            <div style={{display:" flex", flexDirection: "column"}}>
                <label>Mail Label</label>
                <input type="text" value={attributes.mail_name} onChange={ updateMailName }></input>  
                <label>Adresse</label>
                <input type="text" value={attributes.mail_ad} onChange={ updateMailAd }></input>  
                <label>href</label>
                <input type="text" value={attributes.mail_href} onChange={ updateMailHref }></input>  
            </div>
        ]);
    },

    save: function( { attributes } ) {

        return (
            <div className="kontakt__mail">
                <a href={'mailto:' + attributes.mail_href}>
                    <p className="adress__name">{ attributes.mail_name }</p>
                    <p className="adress">{ attributes.mail_ad }</p>
                </a>      
            </div>
        );
    }
});



/* registerBlockType('lh-theme/lh-svg', {
    title: 'SVG',
    description: 'SVG-block',
    icon: 'shield',
    category: 'common',

    
    attributes: {
        svg_class: {
            type: 'string'
        },
        svg_attributes: {
            type: 'string'
        },
        svg_content: {
            type: 'string'
        },
        date: {
            type: 'html',
            source: 'children',
            selector: '.date',
            className: 'vita__date'
        },
    },

    edit: function ({ attributes, setAttributes, className, isSelected }) {
        //const updateDate;
        function updateSvgClass(event) {
            setAttributes( { svg_class: event.target.value } );
        }
        function updateSvgAttributes(event) {
            setAttributes( { svg_attributes: event.target.value } );
        }
        function updateSvgContent(event) {
            setAttributes( { svg_content: event.target.value } );
        }


        return ([
            <div>
                <label>SVG Class</label>
                <input type="text" value={attributes.svg_class} onChange={ updateSvgClass }></input>  
                <RichText
                        key="editable"
                        tagName="p"
                        className={className}
                        value={attributes.date}
                        onChange={(date) => setAttributes({ date })}
                        placeholder={'JJJJ – JJJJ'}
                        keepPlaceholderOnFocus={true}
                    />
                <label>Attributes</label>
                <input type="text" value={attributes.svg_attributes} onChange={ updateSvgAttributes }></input>  
                <label>Inhalt</label>
                <input type="text" value={attributes.svg_content} onChange={ updateSvgContent }></input>  
            </div>
        ]);
    },

    save: function( { attributes } ) {

        return (
            <RichText.Content tagName="p" className="vita__date" value={ attributes.date } />
            //<svg className={ attributes.svg_class }  value={ attributes.svg_attributes } >
            //    {attributes.svg_content}
            //</svg>
        );
    }
}); */
