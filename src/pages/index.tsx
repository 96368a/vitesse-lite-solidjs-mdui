export default function Index() {
  const [name, setName] = createSignal('')

  const navigate = useNavigate()
  const go = () => {
    if (name())
      navigate(`/hi/${encodeURIComponent(name())}`)
  }

  return (
    <div>
      <div class="i-carbon-campsite text-4xl inline-block" />
      <p>
        <a rel="noreferrer" href="https://github.com/antfu/vitesse-lite" target="_blank">
          Vitesse Lite
        </a>
      </p>
      <p>
        <em class="text-sm op75">Opinionated Vite Starter Template</em>
      </p>

      <div class="py-4" />
      <mdui-text-field
        id="input"
        label="What's your name?"
        type="text"
        class="px-4 py-2 w-250px text-center bg-transparent outline-none outline-active:none border border-rounded border-gray-200 border-dark:gray-700"
        oninput={e => setName((e.currentTarget as HTMLInputElement).value)}
        onKeyDown={({ key }) => key === 'Enter' && go()}
      >
      </mdui-text-field>

      <div>
        <mdui-button
          class="m-3 text-sm"
          disabled={!name()}
          onClick={() => go()}
        >
          Go
        </mdui-button>
      </div>
    </div>
  )
}
