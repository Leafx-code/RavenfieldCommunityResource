import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as o,a as i,o as d}from"./app-DZ53hf9K.js";const a={};function r(n,e){return d(),o("div",null,e[0]||(e[0]=[i('<h1 id="mutatorcotentmod" tabindex="-1"><a class="header-anchor" href="#mutatorcotentmod"><span>MutatorCotentMod</span></a></h1><h2 id="description" tabindex="-1"><a class="header-anchor" href="#description"><span>Description</span></a></h2><p>Mutator exports a configuration component that can only be exported by Unity and imported by the game if it is applied to a prefab.</p><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage"><span>Usage</span></a></h2><p>Just apply it to an empty object prefab or to the weapon itself.</p><p>Configure each Mutator by setting the number of Mutators to be exported in <code>Size</code>.</p><h2 id="comment" tabindex="-1"><a class="header-anchor" href="#comment"><span>Comment</span></a></h2><h2 id="variables" tabindex="-1"><a class="header-anchor" href="#variables"><span>Variables</span></a></h2><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>name</td><td>string</td><td>Mutator name</td></tr><tr><td>description</td><td>string</td><td>Mutator&#39;s description</td></tr><tr><td>menuImage</td><td>Texture2D</td><td>Mutator&#39;s Logo（Recommended ratio 16:10）</td></tr><tr><td>mutatorPrefab</td><td>GameObject</td><td>Mutator&#39;s prefab</td></tr><tr><td>labels</td><td>class.configuration.MutatorConfigurationLabel[]</td><td>Text to be displayed in the configuration page (<code>Size</code>=quantity. Fill in <code>Size</code> first, then configure labels in <code>Element</code>, <code>id</code> = id to be defined for this label, <code>displayName</code> = text to be displayed, <code>orderPriority</code> = priority of displaying this item, i.e., sorting)</td></tr><tr><td>integers</td><td>class.configuration.IntegerConfigurationField[]</td><td>The integers tab available for configuration in the configuration page (<code>Size</code>=quantity. Fill in <code>Size</code> first, then configure the integers in <code>Element</code>, <code>id</code> = id to be defined for this integer, <code>displayName</code> = text to be displayed for this integer, <code>orderPriority</code> = priority of displaying this item i.e. ordering, <code>value</code>=default value)</td></tr><tr><td>floats</td><td>class.configuration.FloatConfigurationField[]</td><td>Floats tab available for configuration in the configuration page (<code>Size</code>=quantity. Fill in <code>Size</code> first, then configure floats in <code>Element</code>, <code>id</code> = id to be defined for this float, <code>displayName</code> = text to be displayed for this float, <code>orderPriority</code> = priority to be displayed for this item i.e. ordering, value = default value)</td></tr><tr><td>ranges</td><td>class.configuration.RangeConfigurationField[]</td><td>In the <a href="https://docs.unity3d.com/2020.3/Documentation/Manual/script-Slider.html" target="_blank" rel="noopener noreferrer">Sliders</a> tab available for configuration on the configuration page (<code>Size</code>=quantity. Fill in <code>Size</code> first, then configure ranges in <code>Element</code>, <code>id</code>=id to be defined for this range, <code>displayName</code>=text to be displayed for this range, <code>orderPriority</code>=priority of displaying this item i.e. ordering, <code>value.value</code>=default value, <code> value.value</code>=default value, <code>value.min</code>=minimum value corresponding to the leftmost part of the slider, <code>value.max</code>=maximum value corresponding to the rightmost part of the slider, <code>wholeNumbers</code>=whether or not to constrain the slider to integer values)</td></tr><tr><td>strings</td><td>class.configuration.StringConfigurationField[]</td><td>The strings tab available for configuration in the configuration page (<code>Size</code>=quantity. Fill in <code>Size</code> first, then configure strings in <code>Element</code>, <code>id</code> = id to be defined for this string, <code>displayName</code> = text to be displayed for this string, <code>orderPriority</code> = priority of displaying this item i.e. sorting, <code>value</code> = default value)</td></tr><tr><td>bools</td><td>class.configuration.BoolConfigurationField[]</td><td>The bools tab available for configuration in the configuration page (<code>Size</code>=quantity. Fill in <code>Size</code> first, then configure the bools in <code>Element</code>, <code>id</code> = id to be defined for this bool, <code>displayName</code> = text to be displayed for this bool, <code>orderPriority</code> = priority of displaying this item i.e. sorting, <code>value</code> = default value)</td></tr><tr><td>dropdowns</td><td>class.configuration.DropdownConfigurationField[]</td><td>The dropdown list tab available for configuration on the configuration page (<code>Size</code>=Quantity. Fill in <code>Size</code> first, then configure the dropdowns in <code>Element</code>, <code>id</code> = the id to be defined for this dropdown, <code>displayName</code> = the text to be displayed for this dropdown, <code>orderPriority</code> = the priority i.e. ordering for displaying this item, <code>value.index</code> = the serial number of the default value, <code>value.lables</code>. <code>Size</code>=number of tabs, <code>value.lables</code>[*]=option text)</td></tr></tbody></table>',9)]))}const s=t(a,[["render",r],["__file","MutatorCotentMod.html.vue"]]),p=JSON.parse('{"path":"/en/Components/MutatorCotentMod.html","title":"MutatorCotentMod","lang":"en-US","frontmatter":{"category":["Components","Ravenscrpit"],"description":"MutatorCotentMod Description Mutator exports a configuration component that can only be exported by Unity and imported by the game if it is applied to a prefab. Usage Just apply...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://ravenfieldcommunity.github.io/docs/cn/Components/MutatorCotentMod.html"}],["meta",{"property":"og:url","content":"https://ravenfieldcommunity.github.io/docs/en/Components/MutatorCotentMod.html"}],["meta",{"property":"og:site_name","content":"Ravenfield Documents"}],["meta",{"property":"og:title","content":"MutatorCotentMod"}],["meta",{"property":"og:description","content":"MutatorCotentMod Description Mutator exports a configuration component that can only be exported by Unity and imported by the game if it is applied to a prefab. Usage Just apply..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-11-19T08:38:54.000Z"}],["meta",{"property":"article:modified_time","content":"2023-11-19T08:38:54.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"MutatorCotentMod\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-11-19T08:38:54.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Description","slug":"description","link":"#description","children":[]},{"level":2,"title":"Usage","slug":"usage","link":"#usage","children":[]},{"level":2,"title":"Comment","slug":"comment","link":"#comment","children":[]},{"level":2,"title":"Variables","slug":"variables","link":"#variables","children":[]}],"git":{"createdTime":1700383134000,"updatedTime":1700383134000,"contributors":[{"name":"Leafx-code","email":"82655578+Leafx-code@users.noreply.github.com","commits":1}]},"filePathRelative":"en/Components/MutatorCotentMod.md","localizedDate":"November 19, 2023","autoDesc":true}');export{s as comp,p as data};