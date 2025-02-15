<script lang="ts">
  import { CloudIcon, SelfHostIcon } from "$lib/components/marketing/icons";
  import { PricingCard } from "$lib/components/marketing";
  import { Switch } from "$lib/components/ui/switch/index.js";

  let checked = $state<boolean>(false);

  let details = [
    {
      plan: "Basic",
      price: "Free forever",
      benefits: [
        "25 URLs",
        "Custom QR codes",
        "Metadata for URLs",
        "Click analytics",
        "Password protection",
        "Url expiration",
        "Tags & groups",
      ],
    },
    {
      plan: "PRO",
      price: "$9/month",
      benefits: [
        "Unlimited URLs",
        "Custom domains",
        "Custom QR codes",
        "Metadata for URLs",
        "Click analytics",
        "Password protection",
        "Url expiration",
        "Tags & groups",
        "Priority support",
      ],
    },
    {
      plan: "Self-hosting",
      price: "Free forever & Open source",
      benefits: [
        "Unlimited URLs",
        "Custom domains",
        "Custom QR codes",
        "Metadata for URLs",
        "Click analytics",
        "Password protection",
        "Url expiration",
        "Tags & groups",
      ],
    },
  ];

  function changeToggle(e: boolean) {
    checked = e;
  }
</script>

<section
  id="pricing"
  class="flex w-full flex-col items-center justify-center gap-8"
>
  <div class="flex w-full flex-col items-center justify-between md:flex-row">
    <div class="flex w-full flex-col items-center justify-center gap-8">
      <h2
        id="pricing-title"
        class="leading-tighter text-balance text-start text-7xl font-medium tracking-tighter text-[#712C05] duration-300 animate-in slide-in-from-bottom-60 sm:text-center"
      >
        Pricing, that fits <br class="hidden sm:block" /> your pocket!
      </h2>
      <div>
        <div
          id="pricing-toggle"
          class="flex w-full items-center gap-6 p-4 text-lg text-[#552A1B] duration-300 animate-in slide-in-from-bottom-60"
        >
          <div class="flex w-fit flex-col items-center">
            <CloudIcon />
            Cloud Software
          </div>

          <Switch {checked} onCheckedChange={(e) => changeToggle(e)} />

          <div class="flex w-fit flex-col items-center">
            <SelfHostIcon />
            Host it yourself
          </div>
        </div>
      </div>
    </div>
  </div>

  {#if checked}
    <div
      id="self-hosting"
      class="rounded-4xl flex h-fit flex-col overflow-hidden border-2 border-white/40 bg-gradient-to-br from-white/80 to-white/40 shadow-lg backdrop-blur-sm duration-300 animate-in slide-in-from-bottom-60 sm:flex-row"
    >
      <PricingCard details={details[2]} showMessage={true} />
      <div class="flex flex-col justify-center gap-6 p-8 sm:w-1/2">
        <div class="space-y-3">
          <h3 class="text-2xl font-medium text-[#552A1B]">Host it Your Way</h3>
          <p class="text-[#6B4D3D]/80">
            fli.so is proudly open source and free to self-host. Take control of
            your data, customize the platform, and contribute to making it
            better for everyone.
          </p>
        </div>

        <div class="space-y-3">
          {#each ["Full code access & customization", "Deploy on your infrastructure", "Active community support"] as benefit}
            <div class="flex items-center gap-3 text-[#6B4D3D]/90">
              <div
                class="flex h-5 w-5 items-center justify-center rounded-full bg-[#FFD47C]/30"
              >
                <span class="text-sm text-[#552A1B]">✓</span>
              </div>
              <span class="text-sm">{benefit}</span>
            </div>
          {/each}
        </div>
      </div>
    </div>
  {:else}
    <div
      id="cloud-software"
      class="g-3 rounded-4xl flex h-fit w-full flex-col border-4 border-white bg-[#FAF7F4] shadow-lg duration-300 animate-in slide-in-from-bottom-60 sm:flex-row"
    >
      {#each details.slice(0, 2) as item}
        <PricingCard details={item} class="flex-1" />
      {/each}
    </div>
  {/if}
</section>
