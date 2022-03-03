.PHONY: build-server push-server run-server pull-server npm-install replacements

IMG:=cartesi/website
IMG_REPLACEMENTS:=cartesi/website-replacements

build-server:
	docker build -t $(IMG) server

npm-install: build-server
	docker run \
		 -e USER=$$(id -u -n) \
		 -e GROUP=$$(id -g -n) \
		 -e UID=$$(id -u) \
		 -e GID=$$(id -g) \
		 -v `pwd`:/home/$$(id -u -n) \
		 -w /home/$$(id -u -n) \
		 --rm $(IMG) npm install

push-server: build-server
	docker push $(IMG)

pull-server:
	docker pull $(IMG)

run-server:
	docker run \
		 -e USER=$$(id -u -n) \
		 -e GROUP=$$(id -g -n) \
		 -e UID=$$(id -u) \
		 -e GID=$$(id -g) \
		 -v `pwd`:/home/$$(id -u -n) \
		 -p 8000:8000 \
		 -w /home/$$(id -u -n) \
         -it \
		 --rm $(IMG)

build-replacements:
	docker build -t $(IMG_REPLACEMENTS) replacements

replacements: build-replacements
	touch replacements.json
	docker run \
		 -e USER=$$(id -u -n) \
		 -e GROUP=$$(id -g -n) \
		 -e UID=$$(id -u) \
		 -e GID=$$(id -g) \
		 -v `pwd`:/home/$$(id -u -n) \
		 -w /home/$$(id -u -n) \
		 --rm $(IMG_REPLACEMENTS) node /opt/cartesi/website-replacements/replacements.js ~/docs $$REPLACEMENTS_FILTER
