import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';

import { ButtonLink } from '../button-link';

function CopyWithImage(): React.ReactElement {
  return (
    <div className="bg-gray-50">
      <div className="w-full px-4 py-12 mx-auto lg:py-24 max-w-screen-2xl sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="relative order-last bg-primary lg:order-none">
            <StaticImage
              src="https://images.unsplash.com/photo-1595844730289-b248c919d6f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80"
              alt=""
              className="h-full"
            />
          </div>
          <div className="pb-5 lg:py-12">
            <div className="prose">
              <h2 className="!text-4xl !font-semibold !mb-4">Our Story</h2>
              <p>
                Lorem ipsum dolor sit amet, noster latine interpretaris cum ut,
                per et mundi vidisse platonem. Te recusabo interpretaris duo,
                mei melius mentitum ne, est an iisque quaestio. Ad illum diceret
                pri. Volumus accusamus intellegebat cu mel, ad ludus dolor
                postulant mea.
              </p>
              <p>
                Et sit mollis pertinax, pro persius virtute mediocritatem an.
                Inermis appellantur nam ei, has id placerat principes. Admodum
                luptatum ne pro. Vix at equidem similique, mei an iuvaret
                eruditi abhorreant, te per iriure elaboraret. Odio animal
                omittantur et duo, stet saperet ponderum mel te.
              </p>
            </div>
            <p className="mt-5">
              <ButtonLink
                link={{
                  isButton: true,
                  page: null,
                  styles: {
                    isBlock: false,
                    isLarge: true,
                    style: 'is-outline',
                  },
                  title: 'Contact Us',
                  url: 'https://www.google.com/',
                }}
              />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export { CopyWithImage };
