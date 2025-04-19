import React from "react";

export function ShakshukaBlog() {
  return (
    <article className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <header className="max-w-4xl mx-auto mb-16">
          <h1 className="text-5xl font-display font-bold mb-6 text-primary">
            Perfect Shakshuka Recipe for a Flavorful Breakfast
          </h1>
          <div className="flex items-center gap-4 text-gray-600">
            <span>By Canan Penez Sertdere</span>
            <span>•</span>
            <time>January 2024</time>
          </div>
        </header>

        <div className="grid lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
          <div className="lg:col-span-2 space-y-8">
            <div className="prose prose-lg max-w-none">
              <p className="lead">
                The sizzling sound of tomatoes and peppers bubbles in a pan. A
                perfectly poached egg sits on top. This simple combination has
                made shakshuka a breakfast favorite around the world. This
                one-pan meal turns basic ingredients into a rich, flavorful dish
                that works any time of the day.
              </p>

              <h2>The History and Cultural Significance</h2>
              <p>
                The fascinating story of shakshuka began in the Amazigh
                triangle, which covers parts of eastern Algeria, southern
                Tunisia, and northwestern Libya. The Amazigh people named this
                dish "shakshak," which means "all mixed up" - a perfect
                description of this delicious mixture of ingredients.
              </p>

              <h3>Origins in North Africa and the Middle East</h3>
              <p>
                Shakshuka originated with the Amazigh people of North Africa,
                who first made it as a vegetable stew. John Barker, a British
                consul in Aleppo, introduced tomatoes to the region in the late
                18th century, and cooks later added them to the recipe.
              </p>

              <h2>Essential Ingredients</h2>
              <div className="bg-gray-50 p-6 rounded-lg my-8">
                <h3 className="font-semibold mb-4">
                  For the Perfect Shakshuka:
                </h3>
                <ul>
                  <li>
                    6 ripe tomatoes or 2 cans (400g each) whole peeled tomatoes
                  </li>
                  <li>2 red bell peppers</li>
                  <li>1 green bell pepper</li>
                  <li>1 large onion</li>
                  <li>4 cloves of garlic</li>
                  <li>4-6 eggs</li>
                  <li>2 tbsp olive oil</li>
                  <li>1 tsp sweet paprika</li>
                  <li>1 tsp ground cumin</li>
                  <li>½ tsp ground coriander</li>
                  <li>Optional: cayenne pepper or chili flakes to taste</li>
                  <li>Salt and black pepper to taste</li>
                  <li>Fresh parsley and cilantro for garnish</li>
                  <li>Optional: crumbled feta cheese</li>
                </ul>
              </div>

              <h2>Cooking Technique</h2>
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold mb-4">
                    Step-by-Step Instructions:
                  </h3>
                  <ol className="space-y-4">
                    <li>
                      1. Dice onions, bell peppers, and tomatoes (if using
                      fresh). Mince garlic.
                    </li>
                    <li>
                      2. Heat olive oil in a large skillet over medium heat. Add
                      onions and cook until softened (5-7 minutes).
                    </li>
                    <li>
                      3. Add bell peppers and garlic, cook for another 5
                      minutes.
                    </li>
                    <li>
                      4. Add spices (paprika, cumin, coriander) and cook until
                      fragrant (1 minute).
                    </li>
                    <li>
                      5. Add tomatoes, reduce heat to medium-low, and simmer for
                      15-20 minutes until thickened.
                    </li>
                    <li>
                      6. Create wells in the sauce and crack eggs into them.
                    </li>
                    <li>
                      7. Cover and cook for 5-8 minutes until egg whites are set
                      but yolks are still runny.
                    </li>
                    <li>8. Garnish with herbs and optional feta cheese.</li>
                  </ol>
                </div>
              </div>

              <h2>Tips for Perfect Results</h2>
              <ul>
                <li>
                  Use ripe tomatoes in summer, quality canned tomatoes in winter
                </li>
                <li>Let the sauce reduce properly before adding eggs</li>
                <li>Keep eggs at room temperature for better cooking</li>
                <li>Serve immediately with fresh bread</li>
              </ul>

              <h2>Regional Variations</h2>
              <p>This beloved dish has inspired many local versions:</p>
              <ul>
                <li>Algerian style comes with hmiss and kesra bread</li>
                <li>Tunisian version combines slata meshouia with tuna</li>
                <li>Moroccan variety is called bīḍ w-maṭiša</li>
                <li>Israeli cuisine adaptation became popular in the 1990s</li>
              </ul>

              <h2>Serving Suggestions</h2>
              <p>
                Serve your shakshuka hot, straight from the pan, with fresh
                bread for dipping. Traditional accompaniments include pita
                bread, challah, or crusty sourdough. For an extra touch of
                authenticity, sprinkle with za'atar or sumac before serving.
              </p>
            </div>
          </div>

          <aside className="lg:col-span-1">
            <div className="sticky top-8 space-y-8">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl mb-8">
                <img
                  src="/gallery/shakshuka.jpg"
                  alt="A perfectly cooked Shakshuka with runny eggs in a rich tomato sauce"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="bg-primary/5 p-6 rounded-xl">
                <h3 className="font-display font-semibold text-xl mb-4">
                  Quick Facts
                </h3>
                <dl className="space-y-2">
                  <dt className="font-semibold">Prep Time</dt>
                  <dd>15 minutes</dd>
                  <dt className="font-semibold">Cook Time</dt>
                  <dd>30-35 minutes</dd>
                  <dt className="font-semibold">Servings</dt>
                  <dd>4-6 people</dd>
                  <dt className="font-semibold">Difficulty</dt>
                  <dd>Medium</dd>
                </dl>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </article>
  );
}
